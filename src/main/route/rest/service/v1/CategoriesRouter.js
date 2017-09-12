const express = require('express');
const knexfile = require('../../../../../../knexfile');
const router = express.Router();

const knex = require('knex')(knexfile[process.env.NODE_ENV]);

function getCategories() {
  return knex.select().table('categories');
}

router.get('/rest/service/v1/categories', (request, response) => {
  getCategories().then((categories) => response.json(categories));
});

module.exports = router;
