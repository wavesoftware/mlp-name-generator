(function(){

  'use strict';

  var Random = require("random-js");
  var crc = require('crc');
  var mt = Random.engines.mt19937();
  mt.autoSeed();
  var generator = new Random(mt);
  var base = 'I love My Little Pony!';

  exports.setSeed = function(seed) {
    mt = Random.engines.mt19937();
    if (seed !== null && seed !== undefined) {
      var iseed = crc.crc32(base + seed.toString());
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