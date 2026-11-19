// Information Security Hardening & Security HTTP Headers

export function securityHeadersMiddleware(req, res, next) {
  // 1. Remove identifying technology headers (Fingerprint masking)
  res.removeHeader('X-Powered-By');

  // 2. Clickjacking Protection (Chống lồng khung Iframe lừa đảo)
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');

  // 3. MIME-Sniffing Defense (Chống thực thi tệp tin giả mạo)
  res.setHeader('X-Content-Type-Options', 'nosniff');

  // 4. Cross-Site Scripting Filter
  res.setHeader('X-XSS-Protection', '1; mode=block');

  // 5. Referrer Policy
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

  // 6. Permissions Policy (Vô hiệu hóa truy cập phần cứng nhạy cảm)
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()');

  // 7. Strict-Transport-Security (HSTS - 2 years)
  res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');

  // 8. Content-Security-Policy (CSP)
  const cspPolicy = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com data:",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https: http://127.0.0.1:* http://localhost:*",
    "frame-src 'self' https://drive.google.com",
    "object-src 'none'",
    "base-uri 'self'"
  ].join('; ');

  res.setHeader('Content-Security-Policy', cspPolicy);

  next();
}
