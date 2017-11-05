const Boom = require('boom');
const CategoriesRouter = require('./route/rest/service/v1/CategoriesRouter');
const Hapi = require('hapi');
const Inert = require('inert');
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

  getRoutes() {
    const rootPage = {
      method: 'GET',
      path: '/{param*}',
      options: {
        handler: {
          directory: {
            index: true,
            listing: false,
            path: path.join(process.cwd(), 'dist', 'frontend'),
          },
        },
      },
    };

    const categoryPage = {
      method: 'GET',
      path: `${CategoriesRouter.PATH.PAGE_CATEGORIES}/{category_slug}`,
      options: {
        handler: (request, h) => {
          return h.file(path.join(process.cwd(), 'dist', 'frontend', 'index.html'));
        },
      },
    };

    const categoryResource = {
      method: 'GET',
      path: `${CategoriesRouter.PATH.REST_V1_CATEGORY}/{category_id}`,
      options: {
        handler: this.router.categories.getPlaylistsByCategoryId,
        validate: {
          params: {
            category_id: Joi.number().required(),
          },
        },
      },
    };

    const categoriesResource = {
      method: 'GET',
      path: CategoriesRouter.PATH.REST_V1_CATEGORIES,
      options: {handler: this.router.categories.getCategories},
    };

    const statusResource = {
      method: 'GET',
      path: `/status`,
      options: {
        handler: request => {
          const {info} = request.query;
          let reply = Boom.notFound(`Supplied parameter value "${info}" is unsupported.`);

          switch (info) {
            case 'version':
              reply = {version: this.VERSION};
              break;
          }

          return reply;
        },
        validate: {
          query: {
            info: Joi.string()
              .valid('version')
              .required(),
          },
        },
      },
    };

    return [categoriesResource, categoryPage, categoryResource, rootPage, statusResource];
  }

  start(callback) {
    if (this.server) {
      callback();
    } else {
      this.server = Hapi.Server({port: this.config.PORT});
      this.server
        .register([
          {
            plugin: Inert,
          },
        ])
        .then(() => this.server.route(this.getRoutes()))
        .then(() => this.server.start())
        .then(() => callback(this.server.info.port));
    }
  }

  stop(callback) {
    if (this.server) {
      this.server
        .stop()
        .then(() => {
          this.server = undefined;
          callback();
        })
        .catch(error => {
          throw error;
        });
    } else {
      callback();
    }
  }
}

Server.prototype.VERSION = require('../../../../package.json').version;

module.exports = Server;
