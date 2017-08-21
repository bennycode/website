const express = require('express');
const IndexRoute = require('./route/IndexRoute');

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
    this.app.use(IndexRoute);
  }

  start(callback) {
    if (!this.server) {
      this.server = this.app.listen(this.config.PORT, () => callback(this.config.PORT));
    } else {
      callback();
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
