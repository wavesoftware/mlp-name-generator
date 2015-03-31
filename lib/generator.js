(function(){

'use strict';

var aItemWords = [];
var aItemCodes = [];
var aCheckArray = [];
var aCheckText = [];


var iCounter = 0;

//Example data.
//Data has binary flags (1,2,4,8,16, etc.)
// In this example we have
// 1 - First Part Only
// 2 - Last Part Only
// 3 - Both


aItemWords[iCounter] = "Autumn";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Brilliant";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Citrus";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Cloudy";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Cool";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Creamy";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Curly";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Dreamy";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Dusty";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Fancy";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Frilly";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Frosty";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Ginger";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Lacy";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Lucky";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Lovely";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Merry";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Midnight";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Minty";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Morning";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Night";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Ocean";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Peachy";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Precious";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Pretty";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "River";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Rosie";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Royal";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Sea";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Silky";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Sky";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Snazzy";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Speedy";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Spring";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Stormy";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Summer";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Sunny";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Sweetie";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Tropical";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Whirly";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Wild";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Windy";
aItemCodes[iCounter++] = 1;
aItemWords[iCounter] = "Winter";
aItemCodes[iCounter++] = 1;


aItemWords[iCounter] = "Amber";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Amethyst";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Angel";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Apple";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Apricot";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Aqua";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Azure";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Banana";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Beach";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Beauty";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Bell";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Berry";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Blue";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Blueberry";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Bright";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Bubble";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Butter";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Candy";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Caramel";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Cream";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Cherry";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Cherries";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Cinnamon";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Cloud";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Cocoa";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Comet";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Cookie";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Coral";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Cotton";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Cream";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Crimson";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Crunch";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Crystal";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Daffodil";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Dahlia";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Daisy";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Dawn";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Dewdrop";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Diamond";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Emerald";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Fairy";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Feather";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Flip";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Fire";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Flitter";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Flower";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Flutter";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Frost";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Glimmer";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Glitter";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Gold";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Harmony";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Holly";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Honey";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Huckleberry";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Indigo";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Jewel";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Lavender";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Lemon";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Lemonade";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Light";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Lilac";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Lily";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Lime";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Love";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Magenta";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Magic";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Mango";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Maple";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Marigold";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Melody";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Meringue";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Mint";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Moon";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Moonlight";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Muffin";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Onyx";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Opal";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Orange";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Peach";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Pearl";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Pepper";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Peridot";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Petal";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Pineapple";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Pink";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Plum";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Poppy";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Posey";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Prince";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Princess";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Pumpkin";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Rain";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Rainbow";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Raspberry";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Red";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Rose";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Rouge";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Ruby";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Sapphire";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Satin";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Scarlet";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Secret";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Shadow";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Shimmer";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Silk";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Silver";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Snow";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Sparkle";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Spice";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Star";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Strawberry";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Sugar";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Sun";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Sunset";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Sunshine";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Sweet";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Taffy";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Tangerine";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Tangy";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Tulip";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Twilight";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Twinkle";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Velvet";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Wind";
aItemCodes[iCounter++] = 3;
aItemWords[iCounter] = "Wing";
aItemCodes[iCounter++] = 3;

aItemWords[iCounter] = "Beam";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Blaze";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Bloom";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Blossom";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Bow";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Bunch";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Breeze";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Burst";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Cake";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Chaser";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Crisp";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Dancer";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Dash";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Dasher";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Dazzle";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Dazzler";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Delight";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Dreamer";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Dreams";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Drop";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Dust";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Eyes";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Fizz";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Flake";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Flash";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Frills";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Glory";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Glow";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Heart";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Joy";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Jubilee";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Lace";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Mist";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Pie";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Puff";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Ribbon";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Sherbet";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Shine";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Shore";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Shores";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Skimmer";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Skipper";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Snap";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Song";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Splash";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Spray";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Surprise";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Swirl";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Treat";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Twirl";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Twist";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Whirl";
aItemCodes[iCounter++] = 2;
aItemWords[iCounter] = "Wish";
aItemCodes[iCounter++] = 2;

iCounter=0;

//These are ways data can be formated.
//The first array is what value the tagged items must contain
//The second array contains the text that follows (first), is after each word (the latter) and finishes the construct (final one)
aCheckArray[iCounter] = [1,2];
aCheckText[iCounter++] = [""," ",""];


function genNumber(nRange)
{
  var iNumGen;
  iNumGen = Math.round((Math.random() * (nRange+1)))-1;

  if (iNumGen < 0)
  {
    iNumGen = genNumber(nRange);
  }

  if (iNumGen>nRange)
  {
    iNumGen = genNumber(nRange);
  }

    return iNumGen;
}


function getNumber(aCurrArray, intCheckNumber)
{
  var intReturn, intLooper;
  var bEnd=false;

  while (bEnd===false)
  {
    intReturn=genNumber(aItemCodes.length-1);

    if ((aItemCodes[intReturn]  &  intCheckNumber) === intCheckNumber)
    {
      bEnd=true;
    }

    for (intLooper=0;intLooper<aCurrArray.length;intLooper++)
    {
      if (aCurrArray[intLooper]===intReturn)
      {
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

exports.generate = function(format) {
  var aUseNumber=[];
  var intArrayUse;
  var strReturn="";
  var intNumber=-1;
  var intLooper, first, second;
  var actualFormat = format || "{0}{1}";

  intArrayUse=genNumber(aCheckArray.length-1);

  for (intLooper=0;intLooper<aCheckArray[intArrayUse].length;intLooper++)
  {
    aUseNumber[intLooper]=-1;
  }

  for (intLooper=0;intLooper<aCheckArray[intArrayUse].length;intLooper++)
  {
                      intNumber=getNumber(aUseNumber,aCheckArray[intArrayUse][intLooper]);
                      aUseNumber[intLooper]=intNumber;
  }

  strReturn = aCheckText[intArrayUse][0];

  for (intLooper=0;intLooper<aUseNumber.length;intLooper++)
  {
    if (aUseNumber[intLooper]>-1)
    {
      strReturn=strReturn + aItemWords[aUseNumber[intLooper]];
      strReturn=strReturn + aCheckText[intArrayUse][intLooper+1];
    }
  }
  first = strReturn.split(' ')[0];
  second = strReturn.split(' ')[1];

  return formatString(actualFormat, first, second);
};

})();