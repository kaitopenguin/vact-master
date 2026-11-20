import { Router } from 'express';
import { securityStore } from '../firewall/securityStore.js';

const router = Router();

// Health check endpoint
router.get('/health', (req, res) => {
  const mem = process.memoryUsage();
  res.json({
    status: 'HEALTHY',
    timestamp: new Date().toISOString(),
    uptime: Math.floor(process.uptime()),
    heapUsageMb: Math.round((mem.heapUsed / 1024 / 1024) * 10) / 10,
    activeProtection: true
  });
});

// Real-time security statistics
router.get('/security/stats', (req, res) => {
  res.json(securityStore.getStats());
});

// Recent security logs
router.get('/security/logs', (req, res) => {
  res.json(securityStore.getRecentLogs(30));
});

// Test endpoint for WAF and Attack Simulation
router.all('/test', (req, res) => {
  res.json({
    success: true,
    message: 'Request passed WAF filters successfully.',
    query: req.query,
    body: req.body
  });
});

export default router;
