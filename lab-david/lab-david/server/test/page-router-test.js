'use strict';

require('./lib/mock-env.js');
const {expect} = require('chai');
const superagent = require('superagent');
const Page = require('../model/page.js');
const serverControl = require('./lib/server-control.js');
let baseURL = process.env.API_URL;

describe('Testing Page Router', function() {
  before(serverControl.start);
  after(serverControl.stop);

  before(done => {
    superagent.get(`${baseURL}/api/login`)
    .auth('notreal@gmail.com', 'anything')
    .then(res => {
      this.tempToken = res.text;
      done();
    })
    .catch(done);
  });

  it('should create a page', (done) => {
    superagent.put(`${baseURL}/api/pages`)
    .send({
      title: 'Not a page',
      content: 'stuff about beer',
      showInNav: true,
    })
    .set('Authorization', `Bearer ${this.tempToken}`)
    .then(res => {
      this.tempPage = res.body;
      expect(res.status).to.equal(200);
      expect(!!res.body.id).to.equal(true);
      expect(res.body.title).to.equal('Not a page');
      expect(res.body.content).to.equal('stuff about beer');
      expect(res.body.showInNav).to.equal(true);
      done();
    })
    .catch(done);
  });
});
