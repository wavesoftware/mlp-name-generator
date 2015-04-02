'use strict';

describe("Generator", function () {
  var generator;
  var first;
  beforeEach(function (){
    var Generator = require('../lib/generator');
    generator = new Generator();
    first = generator.generate();
  });

  describe("generate()", function () {

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
        expect(generator.getFormat()).toEqual('{0}{1}');
        generator.setFormat('{0},{1}');
        actual = generator.generate();
        expect(first).not.toMatch(re);
        expect(actual).toMatch(re);
      });
    });

    describe("with seed 'I love you!'", function() {
      it("returns 'CreamWind'", function() {
        generator.setSeed('I love you!');
        expect(generator.generate()).toEqual('CreamWind');
      });
    });

    describe("with seed 'I heart you!'", function() {
      it("returns 'CottonDrop'", function() {
        generator.setSeed('I heart you!');
        expect(generator.generate()).toEqual('CottonDrop');
      });
    });


  });
  describe('setFormat()', function() {
    var exceptionText = 'Invalid format secified, format should contain {0} and/or {1} for Pony parts';
    it('throw error on invalid format', function() {
      expect( function() { generator.setFormat('Invalid format'); } )
        .toThrow(new TypeError(exceptionText));
    });
    it('uses default format on empty parameter', function() {

      expect( function() { generator.setFormat(); } )
        .not.toThrow(new TypeError(exceptionText));

      expect(generator.getFormat()).toEqual('{0}{1}');
    });
  });
});
