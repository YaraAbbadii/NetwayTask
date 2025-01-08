class LoggerService {
  constructor(module) {
    this.module = module;
  }

  info(message, data = {}) {
    console.log(`[INFO] [${this.module}] ${message}`, data);
  }

  error(message, data = {}) {
    console.error(`[ERROR] [${this.module}] ${message}`, data);
  }

  warn(message, data = {}) {
    console.warn(`[WARN] [${this.module}] ${message}`, data);
  }
}

module.exports = LoggerService;
