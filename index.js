if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const Server = require('./src/main/backend/server/Server');
const server = new Server({PORT: process.env.PORT});

process.on('SIGINT', () => {
  server.stop(() => {
    console.log('Stopped server because of "SIGINT" signal.');
    process.exit(0);
  });
});

server.start((port) => console.log(`Server is running on port "${port}".`));
