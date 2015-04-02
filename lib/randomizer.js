(function(){

  'use strict';

  var Random = require("random-js");
  var crc = require('crc');
  var mt = Random.engines.mt19937();
  mt.autoSeed();
  var generator = new Random(mt);
  var sha1 = require('sha1');
  var lastHash = sha1('I love My Little Pony!');

  exports.setSeed = function(seed) {
    if (seed !== null && seed !== undefined) {
      lastHash = sha1(lastHash + seed.toString());
      var iseed = crc.crc32(lastHash);
      mt.seed(iseed);
    } else {
      mt.autoSeed();
    }
    generator = new Random(mt);
  };

  exports.nextInt = function(min, max) {
    return generator.integer(min, max);
  };

})();