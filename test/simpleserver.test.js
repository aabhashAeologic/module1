const request = require('supertest');
const app = require('../index'); // Assuming your server is exported from index.js

describe('Server Status Check', function () {
  it('should return status code 200 when server is running', function (done) {
    request(app)
      .get('/')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});
