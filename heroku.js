const Server = require('./src/Server');
const server = new Server({PORT: process.env.PORT});
server.start((port) => console.log(`Server is running on port "${port}".`));

