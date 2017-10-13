const CategoriesRouter = require('./route/rest/service/v1/CategoriesRouter');
const Hapi = require('hapi');
const Joi = require('joi');
const path = require('path');

const DEFAULT_CONFIG = {
  PORT: 8080,
};

class Server {
  constructor(config) {
    this.config = Object.assign(DEFAULT_CONFIG, config);
    this.router = {
      categories: new CategoriesRouter(),
    };
    this.server = undefined;
  }

  init() {
    this.initRoutes();
  }

  initRoutes() {
    this.server.route([
      {
        method: 'GET',
        path: '/{param*}',
        config: {
          handler: {
            directory: {
              index: true,
              listing: false,
              path: path.join(process.cwd(), 'dist', 'frontend'),
            },
          },
        },
      },
      {
        method: 'GET',
        path: `${CategoriesRouter.PATH.PAGE_TUTORIALS}/{category_slug}`,
        config: {
          handler: (request, reply) => {
            reply.file(path.join(process.cwd(), 'dist', 'frontend', 'index.html'));
          },
        },
      },
      {
        method: 'GET',
        path: CategoriesRouter.PATH.REST_V1_CATEGORIES,
        config: {handler: this.router.categories.getCategories},
      },
      {
        method: 'GET',
        path: `${CategoriesRouter.PATH.REST_V1_CATEGORY}/{category_id}`,
        config: {
          handler: this.router.categories.getPlaylistsByCategoryId,
          validate: {
            params: {
              category_id: Joi.number().required(),
            },
          },
        },
      },
    ]);
  }

  start(callback) {
    if (this.server) {
      callback();
    } else {
      this.server = new Hapi.Server();
      this.server.connection({port: this.config.PORT});

      this.server.register({
        register: require('inert'),
      }, (error) => {
        if (error) throw error;
        this.init();
        this.server.start((error) => {
          if (error) throw error;
          callback(this.server.info.port);
        });
      });
    }
  }

  stop(callback) {
    if (this.server) {
      this.server.stop({timeout: 1000}, (error) => {
        if (error) throw error;
        this.server = undefined;
        callback();
      });
    } else {
      callback();
    }
  }
}

module.exports = Server;
