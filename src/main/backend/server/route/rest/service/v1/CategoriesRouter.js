const Category = require('../../../../models/Category');

class CategoriesRouter {
  static get PATH() {
    return {
      V1_CATEGORIES: '/rest/service/v1/categories'
    }
  }

  constructor() {
    this.cache = {
      [CategoriesRouter.PATH.V1_CATEGORIES]: null
    };
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
    const categories = Promise.resolve()
      .then(() => {
        const cachedResponse = this.cache[CategoriesRouter.PATH.V1_CATEGORIES];
        return (cachedResponse) ? cachedResponse : this.queryCategories();
      })
      .then((categories) => this.filterCategories(categories))
      .then((filteredCategories) =>(this.cache[CategoriesRouter.PATH.V1_CATEGORIES] = filteredCategories));

    return reply(categories);
  }
}

module.exports = CategoriesRouter;
