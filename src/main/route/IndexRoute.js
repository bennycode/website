const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  response.send(`<b>Node.js Environment via Index Route: ${process.env.NODE_ENV}</b>`);
});

module.exports = router;
