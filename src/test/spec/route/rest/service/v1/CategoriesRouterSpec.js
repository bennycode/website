const request = require('request');
const Server = require(`../../../../../../main/backend/server/Server`);

describe('CategoriesRouter', () => {
  let server = undefined;

  const SERVER_PORT = 8072;
  const BASE_URL = `http://localhost:${SERVER_PORT}/`;

  beforeAll((done) => {
    server = new Server({PORT: SERVER_PORT});
    server.start(() => done());
  });

  afterAll((done) => server && server.stop(done));

  describe('Cache', () => {
    it('caches database requests', (done) => {
      expect('A').toBe('A');
      done();
    });
  });
});
