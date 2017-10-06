const database = require('../../../../connection/database');

const getCategories = () => database.select().table('categories');

module.exports = {
  method: 'GET',
  path: '/rest/service/v1/categories',
  config: {
    handler: (request, reply) => getCategories().then(reply)
  }
};

