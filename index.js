require('dotenv').config();
const Server = require('./src/main/backend/server/Server');
const server = new Server({PORT: 8080});
server.start((port) => console.log(`Server is running on port "${port}".`));
