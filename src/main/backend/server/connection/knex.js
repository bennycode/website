const knexFile = require('../../../../../knexfile');
const knex = require('knex')(knexFile[process.env.NODE_ENV]);

module.exports = knex;
