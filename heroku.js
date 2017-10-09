const Server = require('./src/main/backend/server/Server');
const server = new Server({PORT: process.env.PORT});
server.start((port) => console.log(`Server is running on port "${port}".`));

