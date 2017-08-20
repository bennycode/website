const express = require('express');
const app = express();

const PORT = 8080;

app.get('/', (request, response) => response.send('<b>Hello, World!</b>'));
app.listen(PORT, () => console.log(`Server is running on port "${PORT}".`));
