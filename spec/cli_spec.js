'use strict';

describe("CLI", function () {
  var cli;
  beforeEach(function (){
    cli = require('../lib/cli');
  });

  it('should run', function() {
    expect(function() { cli.run(); }).not.toThrow();
  });
});