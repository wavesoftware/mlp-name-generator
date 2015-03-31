'use strict';

describe("Generator", function () {

  describe("generate()", function () {
    var generator;
    var first;
    beforeEach(function (){
      generator = require('../lib/generator');
      first = generator.generate();
    });

    describe("with default params", function() {
      it("not equal ''", function () {
        expect(first).not.toEqual('');
      });
      it("match /^[A-Z][a-z]+[A-Z][a-z]+$/", function(){
        expect(first).toMatch(/^[A-Z][a-z]+[A-Z][a-z]+$/);
      });
      it('diffrent each time', function () {
        var second = generator.generate();
        expect(first).not.toBe(second);
        var third =  generator.generate();
        expect(first).not.toBe(third);
        expect(second).not.toBe(third);
      });
    });

    describe("with '{0},{1}' param", function() {
      it('match /^[A-Z][a-z]+,[A-Z][a-z]+$/', function() {
        var actual;
        var re = /^[A-Z][a-z]+,[A-Z][a-z]+$/;
        actual = generator.generate('{0},{1}');
        expect(first).not.toMatch(re);
        expect(actual).toMatch(re);
      });
    });

  });
});
