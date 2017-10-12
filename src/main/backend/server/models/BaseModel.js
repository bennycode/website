const knex = require('../connection/knex');
const limax = require('limax');
const Model = require('objection').Model;
Model.knex(knex);

class BaseModel extends Model {
  $beforeInsert() {
    if (!this.slug) this.slug = limax(this.name);
    this.created_at = knex.fn.now();
  }

  $beforeUpdate() {
    this.updated_at = knex.fn.now();
  }
}

module.exports = BaseModel;
