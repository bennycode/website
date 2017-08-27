const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  response.send(`<b>Deployment Test: ${process.env.NODE_ENV}</b>`);
});

module.exports = router;
