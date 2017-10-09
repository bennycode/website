const BaseModel = require('./BaseModel');

class Category extends BaseModel {
  static get tableName() {
    return 'categories';
  }
}

module.exports = Category;
