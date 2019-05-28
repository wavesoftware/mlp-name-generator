'use strict';

describe("CLI", function () {
  var cli;
  beforeEach(function (){
    cli = require('../lib/cli');
  });

  describe('should run', function() {
    it('without stdin', function() {
      var argv = {
        stdin: false, s: false,
        num: 1, n: 1
      };
      expect(function() { cli.run(argv); }).not.toThrow();
    });
    it('with stdin', function() {
      var argv = {
        stdin: true, s: true,
        num: 2, n: 2
      };
      expect(function() { cli.run(argv); }).not.toThrow();
    });
  });
});