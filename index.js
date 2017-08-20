require('dotenv').config();

const Server = require('./src/Server');

const server = new Server({
  port: 8080
});
server.start();
