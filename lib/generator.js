(function(){

'use strict';

var Generator = function() {

  var words = require('./data').words;
  var codes = require('./data').codes;
  var aCheckArray = [];
  var aCheckText = [];
  var iCounter = 0;
  var randomizer = require('./randomizer');

  //These are ways data can be formated.
  //The first array is what value the tagged items must contain
  //The second array contains the text that follows (first), is after each word (the latter) and finishes the construct (final one)
  aCheckArray[iCounter] = [1,2];
  aCheckText[iCounter++] = [""," ",""];

  function genNumber(nRange) {
    var iNumGen;
    iNumGen = randomizer.nextInt(0, nRange);
    return iNumGen;
  }

  function getNumber(aCurrArray, intCheckNumber) {
    var intReturn, intLooper;
    var bEnd=false;

    while (bEnd===false) {
      intReturn=genNumber(codes.length-1);

      if ((codes[intReturn]  &  intCheckNumber) === intCheckNumber) {
        bEnd=true;
      }

      for (intLooper=0;intLooper<aCurrArray.length;intLooper++) {
        if (aCurrArray[intLooper]===intReturn) {
          bEnd=false;
        }
      }
    }

    return intReturn;
  }

  function formatString(format) {
    var args = Array.prototype.slice.call(arguments, 1);
    return format.replace(/{(\d+)}/g, function(match, number) {
      return typeof args[number] !== 'undefined' ?
        args[number] : match;
    });
  }

  var DEFAULT_FORMAT = "{0}{1}";
  var settings = {
    format: DEFAULT_FORMAT
  };

  this.getFormat = function() {
    return settings.format + "";
  };
  this.setFormat = function(format) {
    if (format === undefined) {
      settings.format = DEFAULT_FORMAT;
      return;
    }
    var re = /^[^\{\}]*?\{[01]\}[^\{\}0-9]*?(?:\{[01]\}[^\{\}]*?)?$/;
    if (!re.test(format)) {
      throw new TypeError('Invalid format secified, format should contain {0} and/or {1} for Pony parts');
    }
    settings.format = format + "";
  };
  this.setSeed = function(seed) {
    randomizer.setSeed(seed);
  };
  this.generate = function() {
    var aUseNumber=[];
    var intArrayUse;
    var strReturn="";
    var intNumber=-1;
    var intLooper, first, second;

    intArrayUse=genNumber(aCheckArray.length-1);

    for (intLooper = 0; intLooper < aCheckArray[intArrayUse].length; intLooper++) {
      aUseNumber[intLooper] = -1;
    }

    for (intLooper = 0; intLooper < aCheckArray[intArrayUse].length; intLooper++) {
      intNumber = getNumber(aUseNumber, aCheckArray[intArrayUse][intLooper]);
      aUseNumber[intLooper] = intNumber;
    }

    strReturn = aCheckText[intArrayUse][0];

    for (intLooper = 0; intLooper < aUseNumber.length; intLooper++) {
      if (aUseNumber[intLooper] > -1) {
        strReturn = strReturn + words[aUseNumber[intLooper]];
        strReturn = strReturn + aCheckText[intArrayUse][intLooper+1];
      }
    }
    first = strReturn.split(' ')[0];
    second = strReturn.split(' ')[1];

    return formatString(settings.format, first, second);
  };

};

module.exports = Generator;

})();