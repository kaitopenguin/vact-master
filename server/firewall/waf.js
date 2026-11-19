// Web Application Firewall (WAF) Engine
// Deep inspection for SQL Injection, XSS, RCE, Path Traversal, and Malicious User Agents

import { securityStore } from './securityStore.js';

// Threat Signatures & Heuristics
const SQLI_PATTERNS = [
  /(\b(SELECT|UNION|INSERT|UPDATE|DELETE|DROP|ALTER|CREATE|TRUNCATE)\b\s+.*?\b(FROM|INTO|TABLE|DATABASE)\b)/i,
  /(\bOR\b\s+['"\d\w]+\s*=\s*['"\d\w]+)/i,
  /(\bAND\b\s+['"\d\w]+\s*=\s*['"\d\w]+)/i,
  /(--|\#|\/\*).*?$/m,
  /(WAITFOR\s+DELAY|SLEEP\s*\(|BENCHMARK\s*\()/i,
  /(INFORMATION_SCHEMA|SYS\.TABLES|PG_SLEEP)/i,
  /(';\s*SHUTDOWN|';\s*DROP)/i
];

const XSS_PATTERNS = [
  /<script\b[^>]*>([\s\S]*?)<\/script>/i,
  /javascript\s*:\s*[^\s]+/i,
  /(\bon(load|error|click|mouseover|submit|focus|change)\s*=)/i,
  /<iframe\b[^>]*>/i,
  /<svg\b[^>]*\/onload/i,
  /(document\.cookie|document\.location|window\.location)/i,
  /(eval\s*\(|Function\s*\()/i
];

const RCE_PATTERNS = [
  /(;|\||`|\$\()\s*(cmd\.exe|powershell|bash|sh|wget|curl|nc|netcat|ncat|python|perl|ruby)\b/i,
  /(\/bin\/sh|\/bin\/bash|\/usr\/bin\/)/i,
  /(passthru|shell_exec|exec|system|popen|proc_open)\s*\(/i
];

const PATH_TRAVERSAL_PATTERNS = [
  /(\.\.[\/\\]|\%2e\%2e[\/\\]|\%252e\%252e)/i,
  /(\/etc\/passwd|\/etc\/shadow|c:\\windows\\system32|boot\.ini)/i,
  /(php:\/\/|data:\/\/|file:\/\/)/i
];

const BAD_USER_AGENTS = [
  /sqlmap/i,
  /nikto/i,
  /dirbuster/i,
  /gobuster/i,
  /masscan/i,
  /zgrab/i,
  /nmap/i,
  /wpscan/i,
  /acunetix/i,
  /havij/i,
  /nessus/i,
  /qualys/i,
  /metasploit/i
];

// Helper to inspect a text string against regex list
function inspectText(text, patterns) {
  if (!text || typeof text !== 'string') return null;
  for (const pat of patterns) {
    if (pat.test(text)) {
      return pat.toString();
    }
  }
  return null;
}

// Deep recursive object inspector
function inspectObject(obj, patterns) {
  if (!obj) return null;
  if (typeof obj === 'string') {
    return inspectText(obj, patterns);
  }
  if (Array.isArray(obj)) {
    for (const item of obj) {
      const match = inspectObject(item, patterns);
      if (match) return match;
    }
  } else if (typeof obj === 'object') {
    for (const key of Object.keys(obj)) {
      // Check key name
      const keyMatch = inspectText(key, patterns);
      if (keyMatch) return keyMatch;
      // Check value
      const valMatch = inspectObject(obj[key], patterns);
      if (valMatch) return valMatch;
    }
  }
  return null;
}

// Track violation count per IP to auto-ban repeat attackers
const violationCounter = new Map(); // ip -> { count: number, resetAt: timestamp }

export function wafMiddleware(req, res, next) {
  securityStore.recordRequest();

  const clientIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '127.0.0.1';
  const cleanIp = String(clientIp).split(',')[0].trim().replace(/^.*:/, '');

  // 1. Check if IP is currently banned
  const banInfo = securityStore.isBanned(cleanIp);
  if (banInfo) {
    const retrySecs = Math.max(1, Math.ceil((banInfo.until - Date.now()) / 1000));
    res.setHeader('Retry-After', retrySecs);
    return res.status(403).json({
      error: 'ACCESS_DENIED_BY_FIREWALL',
      message: 'Địa chỉ IP của bạn tạm thời bị khóa do phát hiện hành vi tấn công lặp lại.',
      reason: banInfo.reason,
      retryAfterSeconds: retrySecs
    });
  }

  // 2. Inspect User-Agent for known attack tools
  const userAgent = req.headers['user-agent'] || '';
  const badBot = inspectText(userAgent, BAD_USER_AGENTS);
  if (badBot) {
    securityStore.recordBlock(cleanIp, 'badbot', `Tool signature: ${badBot} in User-Agent: ${userAgent}`);
    recordViolation(cleanIp, 'Malicious Scanner/Bot Detected');
    return res.status(403).json({
      error: 'WAF_BLOCKED_BAD_BOT',
      message: 'Yêu cầu bị từ chối bởi Tường lửa WAF (Phát hiện công cụ quét tự động độc hại).'
    });
  }

  // 3. Inspect URL Path & Query Strings for Path Traversal & Attacks
  const fullUrl = decodeURIComponent(req.originalUrl || req.url || '');
  
  // Path Traversal
  const traversalMatch = inspectText(fullUrl, PATH_TRAVERSAL_PATTERNS);
  if (traversalMatch) {
    securityStore.recordBlock(cleanIp, 'traversal', `Path Traversal: ${fullUrl}`);
    recordViolation(cleanIp, 'Path Traversal Attempt');
    return res.status(403).json({
      error: 'WAF_BLOCKED_PATH_TRAVERSAL',
      message: 'Yêu cầu bị từ chối bởi Tường lửa WAF (Phát hiện tấn công duyệt thư mục bất hợp pháp).'
    });
  }

  // SQL Injection in URL/Query
  const sqliMatch = inspectText(fullUrl, SQLI_PATTERNS) || inspectObject(req.query, SQLI_PATTERNS);
  if (sqliMatch) {
    securityStore.recordBlock(cleanIp, 'sqli', `SQLi in URL/Query: ${fullUrl}`);
    recordViolation(cleanIp, 'SQL Injection Attack');
    return res.status(403).json({
      error: 'WAF_BLOCKED_SQL_INJECTION',
      message: 'Yêu cầu bị chặn bởi Tường lửa WAF (Phát hiện cấu trúc tấn công SQL Injection).'
    });
  }

  // XSS in URL/Query
  const xssMatch = inspectText(fullUrl, XSS_PATTERNS) || inspectObject(req.query, XSS_PATTERNS);
  if (xssMatch) {
    securityStore.recordBlock(cleanIp, 'xss', `XSS in URL/Query: ${fullUrl}`);
    recordViolation(cleanIp, 'Cross-Site Scripting (XSS)');
    return res.status(403).json({
      error: 'WAF_BLOCKED_XSS',
      message: 'Yêu cầu bị chặn bởi Tường lửa WAF (Phát hiện payload XSS độc hại).'
    });
  }

  // RCE in URL/Query
  const rceMatch = inspectText(fullUrl, RCE_PATTERNS) || inspectObject(req.query, RCE_PATTERNS);
  if (rceMatch) {
    securityStore.recordBlock(cleanIp, 'rce', `RCE attempt: ${fullUrl}`);
    recordViolation(cleanIp, 'Remote Command Execution');
    return res.status(403).json({
      error: 'WAF_BLOCKED_RCE',
      message: 'Yêu cầu bị chặn bởi Tường lửa WAF (Phát hiện tấn công thực thi lệnh RCE).'
    });
  }

  // 4. Inspect Request Body (if parsed)
  if (req.body && typeof req.body === 'object') {
    const bodySqli = inspectObject(req.body, SQLI_PATTERNS);
    if (bodySqli) {
      securityStore.recordBlock(cleanIp, 'sqli', `SQLi in Body payload`);
      recordViolation(cleanIp, 'SQL Injection in Request Body');
      return res.status(403).json({
        error: 'WAF_BLOCKED_SQL_INJECTION',
        message: 'Yêu cầu bị chặn bởi Tường lửa WAF (Phát hiện mã SQL Injection trong payload).'
      });
    }

    const bodyXss = inspectObject(req.body, XSS_PATTERNS);
    if (bodyXss) {
      securityStore.recordBlock(cleanIp, 'xss', `XSS in Body payload`);
      recordViolation(cleanIp, 'XSS in Request Body');
      return res.status(403).json({
        error: 'WAF_BLOCKED_XSS',
        message: 'Yêu cầu bị chặn bởi Tường lửa WAF (Phát hiện payload XSS trong body).'
      });
    }
  }

  next();
}

function recordViolation(ip, reason) {
  const now = Date.now();
  let v = violationCounter.get(ip);
  if (!v || now > v.resetAt) {
    v = { count: 1, resetAt: now + 5 * 60 * 1000 };
  } else {
    v.count++;
  }
  violationCounter.set(ip, v);

  // If 3+ violations in 5 minutes, auto-ban IP for 1 hour
  if (v.count >= 3) {
    securityStore.banIp(ip, 60 * 60 * 1000, `Vi phạm an ninh liên tiếp 3 lần: ${reason}`);
    violationCounter.delete(ip);
  }
}
