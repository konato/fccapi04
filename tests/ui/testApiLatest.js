'use strict';
 
var test = require('tape');
var request = require('supertest');
 
var app = require('../../server.js');

test('GET /latest/imagesearch/', function (assert) {
  request(app)
    .get('/latest/imagesearch/')
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function (err, res) {
      assert.error(err, 'No error')
      assert.equal(res.body.length, 10, "Should return 10 last entries")
      assert.end();
    });
});

test('GET /funny%20cats', function (assert) {
  request(app)
    .get('/funny%20cats')
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function (err, res) {
      assert.error(err, 'No error')
      assert.equal(res.body.length, 10, "Should return 10 first entries")
      assert.end();
    });
});

test('GET /funny%20cats?offset=10', function (assert) {
  request(app)
    .get('/funny%20cats?offset=10')
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function (err, res) {
      assert.error(err, 'No error')
      assert.equal(res.body.length, 10, "Should return 10 last entries")
      assert.end();
    });
});

test('GET /funny%20cats?offset=90', function (assert) {
  request(app)
    .get('/funny%20cats?offset=91')
    .expect(500)
    .expect('Content-Type', /json/)
    .end(function (err, res) {
      assert.error(err, 'Should return error, result past 100 entries')
      assert.end();
    });
});

