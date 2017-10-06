const Hapi = require('hapi');
const inert = require('inert');
const path = require('path');

const DEFAULT_CONFIG = {
  PORT: 8080
};

class Server {
  constructor(config) {
    this.config = Object.assign(DEFAULT_CONFIG, config);
    this.server = undefined;
  }

  init() {
    return Promise.resolve().then(() => this.routes());
  }

  routes() {
    const PUBLIC_DIR = path.join(__dirname, 'public');

    this.server.route({
      method: 'GET',
      path: '/{param*}',
      handler: {
        directory: {
          index: true,
          listing: false,
          path: PUBLIC_DIR
        }
      }
    });

    this.server.route([
      require('./route/rest/service/v1/CategoriesRouter')
    ]);
  }

  start(callback) {
    if (this.server) {
      callback();
    } else {
      this.server = new Hapi.Server();
      this.server.connection({port: this.config.PORT});

      this.server.register([inert], (error) => {
        if (error) throw error;
        this.init().then(() => {
          this.server.start((error) => {
            if (error) throw error;
            callback(this.server.info.port);
          });
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
