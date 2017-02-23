'use strict';

require('./lib/mock-env.js');

const {expect} = require('chai');
const superagent = require('superagent');
const serverControl = require('./lib/server-control.js');
const baseURL = process.env.API_URL;

describe('testing auth router', function() {
  before(serverControl.start);
  after(serverControl.stop);

  describe('testing GET /api/login', function() {
    it('should respond with a token and 200 status', (done) => {
      superagent.get(`${baseURL}/api/login`)
      .auth('david.dave33@gmail.com', 'helloworld')
      .then(res => {
        console.log('token', res.text);
        expect(res.status).to.equal(200);
        expect(!!res.text).to.equal(true);
        done();
      })
      .catch(done)
    });
    it('should return a 401', (done) => {
      superagent.get(`${baseURL}/api/login`)
      .then(done)
      .catch(res => {
        expect(res.status).to.equal(401);
        done();
      })
      .catch(done);
    });
    it('should return a 401', (done) => {
      superagent.get(`${baseURL}/api/login`)
      .auth('', 'no beer')
      .then(done)
      .catch(res => {
        expect(res.status).to.equal(401);
        done();
      })
      .catch(done);
    });
    it('should return a 401', (done) => {
      superagent.get(`${baseURL}/api/login`)
      .auth('no beer', '')
      .then(done)
      .catch(res => {
        expect(res.status).to.equal(401);
        done();
      })
      .catch(done);
    });
    it('should return a 401', (done) => {
      superagent.get(`${baseURL}/api/login`)
      .auth('david.dave33@gmail.com', 'wrongpassword')
      .then(done)
      .catch(res => {
        expect(res.status).to.equal(401);
        done();
      })
      .catch(done);
    });
  });
});
