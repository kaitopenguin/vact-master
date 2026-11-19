// DDoS Mitigation & Intelligent Rate Limiting Engine
// Sliding-window counter with burst control and Slowloris protection

import { securityStore } from './securityStore.js';

class SlidingWindowRateLimiter {
  constructor(windowMs = 60000, maxRequests = 120) {
    this.windowMs = windowMs;
    this.maxRequests = maxRequests;
    this.requests = new Map(); // ip -> [timestamps]

    // Periodic cleanup of stale IP records every 3 minutes
    setInterval(() => this.cleanup(), 180000);
  }

  isAllowed(ip) {
    const now = Date.now();
    const cleanIp = ip ? ip.replace(/^.*:/, '') : '127.0.0.1';
    
    let timestamps = this.requests.get(cleanIp) || [];
    // Discard timestamps older than window
    const windowStart = now - this.windowMs;
    timestamps = timestamps.filter(t => t > windowStart);

    if (timestamps.length >= this.maxRequests) {
      this.requests.set(cleanIp, timestamps);
      return {
        allowed: false,
        total: timestamps.length,
        retryAfter: Math.ceil((timestamps[0] + this.windowMs - now) / 1000)
      };
    }

    timestamps.push(now);
    this.requests.set(cleanIp, timestamps);
    return {
      allowed: true,
      total: timestamps.length,
      remaining: this.maxRequests - timestamps.length
    };
  }

  cleanup() {
    const now = Date.now();
    const windowStart = now - this.windowMs;
    for (const [ip, timestamps] of this.requests.entries()) {
      const active = timestamps.filter(t => t > windowStart);
      if (active.length === 0) {
        this.requests.delete(ip);
      } else {
        this.requests.set(ip, active);
      }
    }
  }
}

// 120 requests per minute for standard browsing
const generalLimiter = new SlidingWindowRateLimiter(60000, 120);
// 30 requests per minute for sensitive endpoints (API / Simulation)
const sensitiveLimiter = new SlidingWindowRateLimiter(60000, 30);

export function ddosMiddleware(req, res, next) {
  const clientIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '127.0.0.1';
  const cleanIp = String(clientIp).split(',')[0].trim().replace(/^.*:/, '');

  const isSensitive = req.path.startsWith('/api/');
  const limiter = isSensitive ? sensitiveLimiter : generalLimiter;

  const check = limiter.isAllowed(cleanIp);

  if (!check.allowed) {
    securityStore.recordBlock(cleanIp, 'ddos_ratelimit', `Rate limit exceeded (${check.total} reqs/min)`);
    res.setHeader('Retry-After', check.retryAfter || 60);
    return res.status(429).json({
      error: 'TOO_MANY_REQUESTS_DDOS_GUARD',
      message: 'Hệ thống phát hiện tần suất yêu cầu vượt ngưỡng an toàn. Vui lòng thử lại sau giây lát.',
      retryAfterSeconds: check.retryAfter || 60
    });
  }

  res.setHeader('X-RateLimit-Limit', limiter.maxRequests);
  res.setHeader('X-RateLimit-Remaining', check.remaining);
  next();
}

// Slowloris attack defense: Configures socket timeouts on Node HTTP server
export function configureSlowlorisProtection(server) {
  // Reject slow header transfers
  server.headersTimeout = 10000; // 10s max for headers
  // Maximum total request timeout
  server.requestTimeout = 30000; // 30s max for total request
  // Socket keep alive
  server.keepAliveTimeout = 5000; // 5s idle keep alive
}
