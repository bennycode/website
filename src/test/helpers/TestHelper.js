const request = require('request');

class TestHelper {
  static get SERVER() {
    const PORT = 8072;
    const BASE_URL = `http://localhost:${PORT}`;

    return {
      BASE_URL,
      PORT
    }
  }

  static promiseRequest(url) {
    return new Promise((resolve, reject) => {
      request.get(url, (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }
}

module.exports = TestHelper;
