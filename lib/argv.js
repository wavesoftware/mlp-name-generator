function isNumber(arg) {
  return !isNaN(Number(arg));
}

module.exports.parse = function(pargv) {
  var yargs = require('yargs')
    .usage('Generate a fantastic My Little Pony name. What a lovely ' +
      'command line utility!\n\nUsage: $0 [options]')
    .boolean('s')
    .alias('s', 'stdin')
    .describe('s', 'Force to take input from stdin as a SEED for random ' +
      'generator, but it is so nice to detect a pipe!')
    .alias('n', 'num')
    .describe('n', 'Number of names to generate')
    .default('n', 1)
    .version(function() {
      return require('../package').version;
    }, 'v')
    .alias('v', 'version')
    .help('h')
    .alias('h', 'help');
  yargs.check(function(argv) {
    var msg = 'Please pass an integer, greater or equal then 1, as a ' +
      '--num option: given ' + argv.num; 
    if (!isNumber(argv.num) || argv.num < 1) {
      throw new Error(msg);
    }
    return true;
  });
  return yargs.parse(pargv);
};