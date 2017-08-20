const express = require('express');
const app = express();

const PORT = process.env.PORT;

app.get('/', (request, response) => response.send(`<b>Environment: ${process.env.NODE_ENV}</b>`));
app.listen(PORT, () => console.log(`Server is running on Heroku.`));
