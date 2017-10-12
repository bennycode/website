const CategoriesRouter = require('../../../../../../main/backend/server/route/rest/service/v1/CategoriesRouter');
const request = require('request');
const Server = require('../../../../../../main/backend/server/Server');
const TestHelper = require('../../../../../helpers/TestHelper');

describe('CategoriesRouter', () => {
  let server = undefined;

  beforeAll((done) => {
    server = new Server({PORT: TestHelper.SERVER.PORT});
    server.start(() => done());
  });

  afterAll((done) => server && server.stop(done));

  describe('getCategories', () => {
    it('caches database requests', (done) => {
      spyOn(server.router.categories, 'queryCategories').and.callThrough();
      const url = `${TestHelper.SERVER.BASE_URL}${CategoriesRouter.PATH.V1_CATEGORIES}`;

      Promise.resolve()
        .then(() => TestHelper.promiseRequest(url))
        .then(() => expect(server.router.categories.queryCategories).toHaveBeenCalledTimes(1))
        .then(() => TestHelper.promiseRequest(url))
        .then(() => expect(server.router.categories.queryCategories).toHaveBeenCalledTimes(1))
        .then(() => TestHelper.promiseRequest(url))
        .then(() => expect(server.router.categories.queryCategories).toHaveBeenCalledTimes(1))
        .then(() => {
          server.router.categories.resetCache();
          return TestHelper.promiseRequest(url);
        })
        .then(() => expect(server.router.categories.queryCategories).toHaveBeenCalledTimes(2))
        .then(() => done())
        .catch(done.fail);
    });
  });

  describe('getPlaylists', () => {
    it('returns playlists of a specific category', (done) => {
      const category_id = 2;
      const url = `${TestHelper.SERVER.BASE_URL}${CategoriesRouter.PATH.V1_CATEGORY}/${category_id}`;

      request.get(url, (error, response) => {
        if (error) return done.fail(error);
        expect(response.statusCode).toBe(200);
        const playlists = JSON.parse(response.body);
        expect(playlists.length).not.toBeLessThan(0);
        done();
      });
    });
  });
});
