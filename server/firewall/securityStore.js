// In-Memory Security & Threat Intelligence Store
// Tracks live metrics, rate-limits, blocked attempts, and system health

class SecurityStore {
  constructor() {
    this.startTime = Date.now();
    this.totalRequests = 0;
    this.blockedRequests = 0;
    this.blockedByType = {
      sqli: 0,
      xss: 0,
      rce: 0,
      traversal: 0,
      badbot: 0,
      ddos_ratelimit: 0,
      overflow_payload: 0,
      overflow_circuit: 0
    };
    this.bannedIps = new Map(); // ip -> { until: timestamp, reason: string }
    this.recentLogs = []; // array of { id, time, ip, type, detail, status }
    this.maxLogs = 100;
  }

  recordRequest() {
    this.totalRequests++;
  }

  recordBlock(ip, type, detail) {
    this.blockedRequests++;
    if (this.blockedByType[type] !== undefined) {
      this.blockedByType[type]++;
    }

    const logEntry = {
      id: 'SEC-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 6),
      timestamp: new Date().toISOString(),
      ip: ip ? ip.replace(/^.*:/, '') : 'unknown', // normalize IPv6/IPv4
      type,
      detail: detail ? detail.slice(0, 150) : '',
      status: 'BLOCKED'
    };

    this.recentLogs.unshift(logEntry);
    if (this.recentLogs.length > this.maxLogs) {
      this.recentLogs.pop();
    }

    return logEntry;
  }

  banIp(ip, durationMs, reason) {
    const cleanIp = ip ? ip.replace(/^.*:/, '') : 'unknown';
    const until = Date.now() + durationMs;
    this.bannedIps.set(cleanIp, { until, reason });
  }

  isBanned(ip) {
    const cleanIp = ip ? ip.replace(/^.*:/, '') : 'unknown';
    const entry = this.bannedIps.get(cleanIp);
    if (!entry) return false;
    if (Date.now() > entry.until) {
      this.bannedIps.delete(cleanIp);
      return false;
    }
    return entry;
  }

  getStats() {
    const mem = process.memoryUsage();
    return {
      uptimeSeconds: Math.floor((Date.now() - this.startTime) / 1000),
      totalRequests: this.totalRequests,
      blockedRequests: this.blockedRequests,
      blockedByType: { ...this.blockedByType },
      bannedIpsCount: this.bannedIps.size,
      memory: {
        heapUsedMb: Math.round((mem.heapUsed / 1024 / 1024) * 10) / 10,
        heapTotalMb: Math.round((mem.heapTotal / 1024 / 1024) * 10) / 10,
        rssMb: Math.round((mem.rss / 1024 / 1024) * 10) / 10
      },
      status: 'ACTIVE_SHIELD_GREEN'
    };
  }

  getRecentLogs(limit = 20) {
    return this.recentLogs.slice(0, limit);
  }
}

export const securityStore = new SecurityStore();
