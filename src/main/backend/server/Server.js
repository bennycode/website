const CategoriesRouter = require('./route/rest/service/v1/CategoriesRouter');
const Hapi = require('hapi');

const DEFAULT_CONFIG = {
  PORT: 8080
};

class Server {
  constructor(config) {
    this.config = Object.assign(DEFAULT_CONFIG, config);
    this.router = {
      categories: new CategoriesRouter()
    };
    this.server = undefined;
  }

  init() {
    this.initRoutes();
  }

  initRoutes() {
    this.server.route([
      require('./route/IndexRouter'),
      {method: 'GET', path: CategoriesRouter.PATH.V1_CATEGORIES, config: {handler: this.router.categories.handler}}
    ]);
  }

  start(callback) {
    if (this.server) {
      callback();
    } else {
      this.server = new Hapi.Server();
      this.server.connection({port: this.config.PORT});

      this.server.register({
        register: require('inert')
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
