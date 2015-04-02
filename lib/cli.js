var Generator = require('./generator');
var generator = new Generator();

exports.run = function() {
  console.log(generator.generate());
};