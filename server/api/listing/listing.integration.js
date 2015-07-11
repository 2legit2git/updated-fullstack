'use strict';

var app = require('../../app');
var request = require('supertest');

var newListing;

describe('Listing API:', function() {

  describe('GET /api/listings', function() {
    var listings;

    beforeEach(function(done) {
      request(app)
        .get('/api/listings')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          listings = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      listings.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/listings', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/listings')
        .send({
          name: 'New Listing',
          info: 'This is the brand new listing!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          newListing = res.body;
          done();
        });
    });

    it('should respond with the newly created listing', function() {
      newListing.name.should.equal('New Listing');
      newListing.info.should.equal('This is the brand new listing!!!');
    });

  });

  describe('GET /api/listings/:id', function() {
    var listing;

    beforeEach(function(done) {
      request(app)
        .get('/api/listings/' + newListing._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          listing = res.body;
          done();
        });
    });

    afterEach(function() {
      listing = {};
    });

    it('should respond with the requested listing', function() {
      listing.name.should.equal('New Listing');
      listing.info.should.equal('This is the brand new listing!!!');
    });

  });

  describe('PUT /api/listings/:id', function() {
    var updatedListing

    beforeEach(function(done) {
      request(app)
        .put('/api/listings/' + newListing._id)
        .send({
          name: 'Updated Listing',
          info: 'This is the updated listing!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedListing = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedListing = {};
    });

    it('should respond with the updated listing', function() {
      updatedListing.name.should.equal('Updated Listing');
      updatedListing.info.should.equal('This is the updated listing!!!');
    });

  });

  describe('DELETE /api/listings/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/listings/' + newListing._id)
        .expect(204)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when listing does not exist', function(done) {
      request(app)
        .delete('/api/listings/' + newListing._id)
        .expect(404)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
