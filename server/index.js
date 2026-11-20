// Enterprise Production Backend Server with Multi-Layer Security Architecture
// Includes WAF, DDoS Rate Limiting, Anti-Overflow Circuit Breaker, Security Headers

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { wafMiddleware } from './firewall/waf.js';
import { ddosMiddleware, configureSlowlorisProtection } from './firewall/ddosProtection.js';
import { overflowGuardMiddleware, MAX_BODY_BYTES } from './firewall/overflowGuard.js';
import { securityHeadersMiddleware } from './firewall/securityHeaders.js';
import securityApi from './routes/securityApi.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

const app = express();
const PORT = process.env.PORT || 3000;

// Trust reverse proxies (Vercel, Cloudflare, Nginx) while preserving client IP
app.set('trust proxy', 1);

// 1. Layer 1: Information Security & Hardened HTTP Headers
app.use(securityHeadersMiddleware);

// 2. Layer 2: Anti-Server Overflow & Memory Circuit Breaker
app.use(overflowGuardMiddleware);

// 3. Layer 3: DDoS Mitigation & Sliding-Window Rate Limiting
app.use(ddosMiddleware);

// Body parser with strict 100KB limit
app.use(express.json({ limit: MAX_BODY_BYTES }));
app.use(express.urlencoded({ extended: true, limit: MAX_BODY_BYTES }));

// 4. Layer 4: Web Application Firewall (WAF) Deep Request Inspection
app.use(wafMiddleware);

// 5. Mount API Routes
app.use('/api', securityApi);

// 6. Serve static files with intelligent cache control (no-cache for HTML, immutable for hashed assets)
app.use(express.static(distDir, {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
    } else {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
  }
}));

// SPA Fallback: All unhandled GET requests return index.html without cache
app.use((req, res) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.sendFile(path.join(distDir, 'index.html'));
});

// Start HTTP server with Slowloris defense
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`====================================================`);
  console.log(`🛡️  V-ACT Master Production Backend Server Running!`);
  console.log(`📍 Port: http://127.0.0.1:${PORT}`);
  console.log(`🟢 Tường lửa WAF: ACTIVE (SQLi, XSS, RCE, Traversal)`);
  console.log(`🟢 Chống DDoS: ACTIVE (120 req/min Sliding Window)`);
  console.log(`🟢 Chống Tràn Server: ACTIVE (Memory Circuit Breaker)`);
  console.log(`🟢 An Toàn Thông Tin: ACTIVE (CSP, HSTS, No-Sniff)`);
  console.log(`====================================================`);
});

configureSlowlorisProtection(server);

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('Received SIGTERM. Shutting down gracefully...');
  server.close(() => process.exit(0));
});

process.on('SIGINT', () => {
  console.log('Received SIGINT. Shutting down gracefully...');
  server.close(() => process.exit(0));
});

export default app;
