const Category = require('../../../../models/Category');

module.exports = {
  method: 'GET',
  path: '/rest/service/v1/categories',
  config: {
    handler: (request, reply) => Category
      .query()
      .select([
        'id',
        'color',
        'name'
      ])
      .then((categories) => categories.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())))
      .then(reply)
  }
};

