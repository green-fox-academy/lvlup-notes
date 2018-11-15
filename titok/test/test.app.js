const assert = require('assert');
const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('app is available', done => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('GET /admin/titok without titok', () => {
  it('auth error', done => {
    request(app)
      .get('/admin/titok')
      .set('Accept', 'application/json')
      .expect(401, done);
  });
});

describe('GET /admin/titok with wrong titok', () => {
  it('auth is ok', done => {
    request(app)
      .get('/admin/titok')
      .set('token', 'kutya')
      .set('Accept', 'application/json')
      .expect(401, done);
  });
});

describe('GET /admin/titok with titok', () => {
  it('auth is ok', done => {
    request(app)
      .get('/admin/titok')
      .set('token', 'cica')
      .set('Accept', 'application/json')
      .expect(200, done);
  });
});