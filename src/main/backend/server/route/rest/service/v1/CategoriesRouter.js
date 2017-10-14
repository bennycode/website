const Category = require('../../../../models/Category');
const Playlist = require('../../../../models/Playlist');

class CategoriesRouter {
  static get PATH() {
    return {
      PAGE_TUTORIALS: '/tutorials',
      REST_V1_CATEGORY: '/rest/service/v1/category',
      REST_V1_CATEGORIES: '/rest/service/v1/categories',
    };
  }

  constructor() {
    this.cache = {};
    this.getCategories = this.getCategories.bind(this);
    this.getPlaylistsByCategoryId = this.getPlaylistsByCategoryId.bind(this);
  }

  filterCategories(categories) {
    return categories.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
  }

  readFromCache(cacheId, fetcher) {
    const cachedValue = this.cache[cacheId];
    return cachedValue ? cachedValue : fetcher();
  }

  saveInCache(cacheId, value) {
    this.cache[cacheId] = value;
    return this.cache[cacheId];
  }

  getCategories(request, reply) {
    const cacheId = request.url.path;

    const categories = Promise.resolve()
      .then(() => this.readFromCache(cacheId, this.queryCategories))
      .then(categories => this.filterCategories(categories))
      .then(filteredCategories => this.saveInCache(cacheId, filteredCategories));

    return reply(categories);
  }

  getPlaylistsByCategoryId(request, reply) {
    const cacheId = request.url.path;
    const {category_id} = request.params;

    const playlists = Promise.resolve()
      .then(() => this.readFromCache(cacheId, () => this.queryPlaylistsByCategoryId(category_id)))
      .then(playlists => this.saveInCache(cacheId, playlists));

    reply(playlists);
  }

  queryCategories() {
    return Category.query().select(['id', 'color', 'name', 'slug']);
  }

  queryPlaylistsByCategoryId(category_id) {
    return Playlist.query().where('category_id', category_id);
  }

  resetCache() {
    this.cache = {};
  }
}

module.exports = CategoriesRouter;
