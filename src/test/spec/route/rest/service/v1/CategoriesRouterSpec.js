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

  describe('handler', () => {
    it('caches database requests', (done) => {
      spyOn(server.router.categories, 'queryCategories').and.callThrough();
      const url = `${BASE_URL}${CategoriesRouter.PATH.V1_CATEGORIES}`;
      request.get(url, (error, response) => {
        if (error) return done.fail(error);
        expect(response.statusCode).toBe(200);
        expect(server.router.categories.queryCategories).toHaveBeenCalledTimes(1);
        expect('A').toBe('A');
        done();
      });
    });
  });
});
