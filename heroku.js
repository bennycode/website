const Server = require('./src/Server');

const server = new Server({
  port: process.env.PORT
});
server.start();
