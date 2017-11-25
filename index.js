if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const logger = require('logdown')('index');
const Server = require('./src/main/backend/server/Server');
const server = new Server({PORT: process.env.PORT});

process.on('SIGINT', () => {
  server.stop(() => {
    logger.warn('Stopped server because of "SIGINT" signal.');
    process.exit(0);
  });
});

server.start((port) => logger.info(`Server is running on port "${port}".`));
