const express = require('express');
const TestRoutes = require('./route/IndexRoute');

const DEFAULT_CONFIG = {
  port: 8080
};

class Server {
  constructor(config) {
    this.app = express();
    this.config = Object.assign(DEFAULT_CONFIG, config);
    this.init();
  }

  init() {
    this.routes();
  }

  routes() {
    this.app.use(TestRoutes);
  }

  start() {
    this.app.listen(this.config.port, () => {
      console.log(`Server is running on port "${this.config.port}".`);
    });
  }
}

module.exports = Server;
