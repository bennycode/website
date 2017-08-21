const request = require('request');
const Server = require('../../main/Server');

describe('Server', () => {
  let server = undefined;
  const BASE_URL = 'http://localhost:8080/';

  beforeAll((done) => {
    server = new Server();
    server.start(done);
  });

  afterAll((done) => {
    server && server.stop(done);
  });

  describe('"start"', () => {
    it('starts a server with an index page.', (done) => {
      request.get(BASE_URL, (error, response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });

  describe('"stop"', () => {
    it('stops a running server.', (done) => {
      expect(server).toBeDefined();
      expect(server.server).toBeDefined();
      server.stop(() => {
        expect(server.server).toBeUndefined();
        done();
      });
    });
  });
});
