const knex = require('../connection/knex');
const Model = require('objection').Model;
Model.knex(knex);

class BaseModel extends Model {
  $beforeInsert() {
    this.created_at = knex.fn.now();
  }

  $beforeUpdate() {
    this.updated_at = knex.fn.now();
  }
}

module.exports = BaseModel;
