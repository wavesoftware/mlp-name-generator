var Generator = require('./generator');
var generator = new Generator();

exports.run = function(argv) {
  function generateAndPrint() {
    for (var i = 0; i < argv.num; i++) {
      console.log(generator.generate());
    }
  }
  if (argv.stdin || !process.stdin.isTTY) {
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', function(data) {
      generator.setSeed(data.toString());
    });
    process.stdin.on('end', function() {
      generateAndPrint();
    });
  } else {
    generateAndPrint();
  }
};