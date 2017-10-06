const path = require('path');

module.exports = {
  method: 'GET',
  path: '/{param*}',
  config: {
    handler: {
      directory: {
        index: true,
        listing: false,
        path: path.join(process.cwd(), 'src', 'main', 'public')
      }
    }
  }
};
