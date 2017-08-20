const express = require('express');

class Server {
  constructor(config) {
    this.app = express();
    this.config = Object.assign({
      port: 8080
    }, config);
    this.init();
  }

  init() {
    this.app.get('/', (request, response) => {
      response.send(`<b>Node.js Environment: ${process.env.NODE_ENV}</b>`);
    });
  }

  start() {
    this.app.listen(this.config.port, () => {
      console.log(`Server is running on port "${this.config.port}".`);
    });
  }
}

module.exports = Server;
