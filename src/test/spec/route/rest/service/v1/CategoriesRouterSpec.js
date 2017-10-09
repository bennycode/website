const request = require('request');
const CategoriesRouter = require('../../../../../../main/backend/server/route/rest/service/v1/CategoriesRouter');
const Server = require('../../../../../../main/backend/server/Server');

describe('CategoriesRouter', () => {
  let server = undefined;

  const SERVER_PORT = 8072;
  const BASE_URL = `http://localhost:${SERVER_PORT}`;

  beforeAll((done) => {
    server = new Server({PORT: SERVER_PORT});
    server.start(() => done());
  });

  afterAll((done) => server && server.stop(done));

  function promiseRequest(url) {
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

  describe('handler', () => {
    it('caches database requests', (done) => {
      spyOn(server.router.categories, 'queryCategories').and.callThrough();
      const url = `${BASE_URL}${CategoriesRouter.PATH.V1_CATEGORIES}`;

      Promise.all([
        promiseRequest(url),
        promiseRequest(url),
        promiseRequest(url),
      ]).then(() => {
        expect(server.router.categories.queryCategories).toHaveBeenCalledTimes(1);
        done();
      });
    });
  });
});
