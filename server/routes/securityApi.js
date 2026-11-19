import { Router } from 'express';
import { execFile } from 'child_process';
import fs from 'fs';
import path from 'path';
import { securityStore } from '../firewall/securityStore.js';

const router = Router();

const CASIO_EXE_PATH = 'C:\\Program Files (x86)\\CASIO\\ClassWiz Emulator Subscription\\fx-580VN X Emulator\\fx-580VN X Emulator.exe';

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

// Check if local Casio 580 emulator is installed on host
router.get('/casio/status', (req, res) => {
  const exists = fs.existsSync(CASIO_EXE_PATH);
  res.json({
    installed: exists,
    path: CASIO_EXE_PATH,
    name: 'CASIO fx-580VN X ClassWiz Emulator'
  });
});

// Launch local desktop Casio 580 emulator
router.post('/casio/launch', (req, res) => {
  if (!fs.existsSync(CASIO_EXE_PATH)) {
    return res.status(404).json({
      success: false,
      message: 'Không tìm thấy tệp fx-580VN X Emulator.exe tại đường dẫn mặc định.'
    });
  }

  const exeDir = path.dirname(CASIO_EXE_PATH);
  execFile(CASIO_EXE_PATH, [], { cwd: exeDir }, (err) => {
    if (err) {
      console.error('Error launching Casio Emulator:', err.message);
    }
  });

  res.json({
    success: true,
    message: 'Đã gửi lệnh khởi động ứng dụng CASIO fx-580VN X ClassWiz Emulator trên máy tính!',
    path: CASIO_EXE_PATH
  });
});

export default router;
