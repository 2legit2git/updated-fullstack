'use strict';

describe('Service: ebayListings', function () {

  // load the service's module
  beforeEach(module('updatedFullstackApp'));

  // instantiate service
  var ebayListings;
  beforeEach(inject(function (_ebayListings_) {
    ebayListings = _ebayListings_;
  }));

  it('should do something', function () {
    expect(!!ebayListings).toBe(true);
  });

});
