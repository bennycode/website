const request = require('request');
const Server = require('../../../main/backend/server/Server');

describe('Server', () => {
  let server = undefined;

  const SERVER_PORT = 8072;
  const BASE_URL = `http://localhost:${SERVER_PORT}`;

  afterEach((done) => server && server.stop(done));

  describe('"start"', () => {
    it('starts a server with an index page.', (done) => {
      server = new Server({PORT: SERVER_PORT});
      server.start(() => {
        request.get(BASE_URL, (error, response) => {
          if (error) return done.fail(error);
          expect(response.statusCode).toBe(200);
          done();
        });
      });
    });

    it('executes a callback when a server is running.', (done) => {
      server = new Server({PORT: SERVER_PORT});
      server.start(done);
    });

    it('doesn\'t start a server when an instance is already running.', (done) => {
      server = new Server({PORT: SERVER_PORT});
      server.start(() => server.start(done));
    });
  });

  describe('"stop"', () => {
    beforeEach((done) => {
      server = new Server({PORT: SERVER_PORT});
      server.start(done);
    });

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
