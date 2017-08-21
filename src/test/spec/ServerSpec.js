const Server = require('../../main/Server');

describe('Server', () => {
  let server = undefined;

  beforeAll((done) => {
    server = new Server();
    server.start(done);
  });

  afterAll((done) => {
    server && server.stop(done);
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
