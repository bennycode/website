const express = require('express');
const database = require('../../../../connection/database');
const router = express.Router();

function getCategories() {
  return database.select().table('categories');
}

router.get('/rest/service/v1/categories', (request, response) => {
  getCategories().then((categories) => response.json(categories));
});

module.exports = router;
