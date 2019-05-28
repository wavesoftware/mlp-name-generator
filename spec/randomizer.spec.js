'use strict';

describe("Randomizer", function () {
  var randomizer = require('../lib/randomizer');
  it('should set default seed', function() {
    expect( function() { randomizer.setSeed(); } ).not.toThrow();
  });
});