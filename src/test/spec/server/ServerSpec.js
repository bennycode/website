const request = require('request');
const Server = require('../../../main/backend/server/Server');
const TestHelper = require('../../helpers/TestHelper');

describe('Server', () => {
  let server = undefined;

  beforeEach(done => {
    server = new Server({PORT: TestHelper.SERVER.PORT});
    server.start(done);
  });

  afterEach(done => server && server.stop(done));

  describe('"start"', () => {
    it('starts a server with an index page.', done => {
      server.start(() => {
        request.get(TestHelper.SERVER.BASE_URL, (error, response) => {
          if (error) return done.fail(error);
          expect(response.statusCode).toBe(200);
          done();
        });
      });
    });

    it('executes a callback when a server is running.', done => {
      server.start(done);
    });

    it("doesn't start a server when an instance is already running.", done => {
      server.start(() => server.start(done));
    });
  });

  describe('"stop"', () => {
    it('stops a running server.', done => {
      expect(server).toBeDefined();
      expect(server.server).toBeDefined();
      server.stop(() => {
        expect(server.server).toBeUndefined();
        done();
      });
    });
  });

  describe('"VERSION"', () => {
    it('returns the current package version.', () => {
      expect(server.VERSION).toBe(require('../../../../package.json').version);
    });
  });
});
