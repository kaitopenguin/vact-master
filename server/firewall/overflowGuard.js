// Anti-Server Overflow & Memory Circuit Breaker Engine
// Protects the server process from Memory Exhaustion, ReDoS, and Request Queue Flooding

import { securityStore } from './securityStore.js';

// Maximum payload size: 100KB for text/json
export const MAX_BODY_BYTES = 100 * 1024;

// Maximum concurrent in-flight requests
let inFlightRequests = 0;
const MAX_CONCURRENT_REQUESTS = 300;

export function overflowGuardMiddleware(req, res, next) {
  const clientIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '127.0.0.1';
  const cleanIp = String(clientIp).split(',')[0].trim().replace(/^.*:/, '');

  // 1. Concurrency Throttling (Chống nghẽn hàng đợi)
  if (inFlightRequests >= MAX_CONCURRENT_REQUESTS) {
    securityStore.recordBlock(cleanIp, 'overflow_circuit', 'Max concurrent requests threshold reached');
    res.setHeader('Retry-After', 5);
    return res.status(503).json({
      error: 'SERVER_CAPACITY_OVERFLOW_GUARD',
      message: 'Máy chủ đang ở ngưỡng tải tối đa để chống nghẽn bộ nhớ. Vui lòng thử lại sau 5 giây.'
    });
  }

  // 2. Memory Circuit Breaker (Chống tràn RAM & Out-of-Memory Crash)
  // Only trip if heapUsed > 600MB AND heapUsageRatio > 0.90 (avoids false-positives at initial small heapTotal)
  const mem = process.memoryUsage();
  const heapUsedMb = mem.heapUsed / (1024 * 1024);
  const heapUsageRatio = mem.heapUsed / mem.heapTotal;

  if (heapUsedMb > 600 && heapUsageRatio > 0.90 && !req.path.startsWith('/api/health')) {
    securityStore.recordBlock(cleanIp, 'overflow_circuit', `High Heap Usage: ${Math.round(heapUsedMb)}MB (${Math.round(heapUsageRatio * 100)}%)`);
    res.setHeader('Retry-After', 15);
    return res.status(503).json({
      error: 'SERVER_CIRCUIT_BREAKER_ACTIVE',
      message: 'Bộ nhớ đệm máy chủ đang thực hiện thu hồi tài nguyên (GC). Tự động phục hồi sau 15 giây.',
      retryAfterSeconds: 15
    });
  }

  // 3. Request Content-Length Check (Chống tràn payload)
  const contentLength = parseInt(req.headers['content-length'] || '0', 10);
  if (contentLength > MAX_BODY_BYTES) {
    securityStore.recordBlock(cleanIp, 'overflow_payload', `Oversized payload: ${contentLength} bytes (max ${MAX_BODY_BYTES})`);
    return res.status(413).json({
      error: 'PAYLOAD_TOO_LARGE',
      message: `Dung lượng yêu cầu vượt mức cho phép (Tối đa ${MAX_BODY_BYTES / 1024} KB).`
    });
  }

  inFlightRequests++;
  
  // Track request termination to decrement in-flight counter
  res.on('finish', () => {
    inFlightRequests = Math.max(0, inFlightRequests - 1);
  });
  res.on('close', () => {
    inFlightRequests = Math.max(0, inFlightRequests - 1);
  });

  next();
}
