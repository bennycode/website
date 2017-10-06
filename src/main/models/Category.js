const knex = require('../connection/knex');
const Model = require('objection').Model;
Model.knex(knex);

class Category extends Model {
  static get tableName() {
    return 'categories';
  }
}

module.exports = Category;
