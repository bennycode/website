const express = require('express');
const path = require('path');

const DEFAULT_CONFIG = {
  PORT: 8080
};

class Server {
  constructor(config) {
    this.config = Object.assign(DEFAULT_CONFIG, config);

    this.app = express();
    this.server = undefined;

    this.init();
  }

  init() {
    this.routes();
  }

  routes() {
    const PUBLIC_DIR = path.join(__dirname, 'public');
    this.app.use(express.static(PUBLIC_DIR));
  }

  start(callback) {
    if (this.server) {
      callback();
    } else {
      this.server = this.app.listen(this.config.PORT, () => callback(this.config.PORT));
    }
  }

  stop(callback) {
    if (this.server) {
      this.server.close(callback);
      this.server = undefined;
    } else {
      callback();
    }
  }
}

module.exports = Server;
