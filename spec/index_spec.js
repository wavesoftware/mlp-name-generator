'use strict';

describe("Index", function () {
  var index = require('../lib/index');

  it('has version number', function() {
    expect(index.VERSION).toMatch(/\d+.\d+.\d+/);
  });
});