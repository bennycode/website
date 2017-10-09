const Category = require('../../../../models/Category');
const LRUCache = require('wire-webapp-lru-cache');

class CategoriesRouter {
  static get PATH() {
    return {
      V1_CATEGORIES: '/rest/service/v1/categories'
    }
  }

  constructor() {
    this.cache = new LRUCache(1);
    this.handler = this.handler.bind(this);
  }

  queryCategories() {
    return Category
      .query()
      .select([
        'id',
        'color',
        'name'
      ]);
  }

  filterCategories(categories) {
    return categories.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
  }

  handler(request, reply) {
    return this.queryCategories().then((categories) => this.filterCategories(categories)).then(reply);
  }
}

module.exports = CategoriesRouter;
