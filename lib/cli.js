var Generator = require('./generator');
var generator = new Generator();
var optimist = require('optimist')
  .usage('Generate a fantastic My Little Pony name. What a lovely command line utility!\n\nUsage: $0')
  .boolean('s')
  .alias('s', 'stdin')
  .describe('s', 'Force to take input from stdin as a SEED for random generator, but it is so nice to detect a pipe!')
  .boolean('h')
  .alias('h', 'help')
  .describe('h', 'Displays this help and exits');
var argv = optimist.argv;

function main() {
  if (argv.h) {
    optimist.showHelp();
    return 1;
  }
  function generateAndPrint() {
    console.log(generator.generate());
  }
  if (argv.s || !process.stdin.isTTY) {
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
}

exports.run = function() {
  var ret = main();
  if (ret !== undefined) {
    process.exit(ret);
  }
};