const Category = require('../../../../models/Category');

module.exports = {
  method: 'GET',
  path: '/rest/service/v1/categories',
  config: {
    handler: (request, reply) => Category
      .query()
      .then((categories) => categories.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())))
      .then(reply)
  }
};

