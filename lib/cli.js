var Generator = require('./generator');

exports.run = function() {
  var gen = new Generator();
  console.log(gen.generate());
};