function numberToEnglish (number) {
  var currentNumber = number;
  var numberArray = [];
  var tenCount = 0;
  // Write your code here, and
  // return your final answer.
  //first, get the remainder after ten 
  while (currentNumber > 0) {
    numberArray.push(currentNumber%10);
    currentNumber = Math.floor(currentNumber/10);
    tenCount++;
  }
  //place the numbers in groups of three
  var groupNumbers = [];

  for (var i = 0; i < numberArray.length; i = i + 3) {
    groupNumbers.push([numberArray[i+2] || 0, numberArray[i+1] || 0, numberArray[i+0] || 0]);
  }
  //translate numbers to english;
  var englishArray = [];

  for (var i = groupNumbers.length - 1; i >= 0; i--) {
    var place = Math.pow(1000, i) > 1 ? Math.pow(1000, i) : '';
    var oneHundredsPosition = groupNumbers[i][0] > 0 ? numberToWords[groupNumbers[i][0]] + '-' + numbersToPlace[100] : '';
    var tensPosition = numbersToWords[groupNumbers[i][1] + groupNumbers[i][2]];
    englishArray.push(oneHundredsPosition + tensPosition + place);
  }

  return englishArray;


 }





// Number to English
// Write a function numberToEnglish, it should take a number and return the number as a string using English words.

// You've got Helpers! (click to view code)
// numbersToWords //Object
var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
numbersToPlace //Object
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};
// Examples
// Input	Output
// number:
// 7	"seven"
// number:
// 575	"five hundred seventy-five"
// number:
// 78193512	"seventy-eight million one hundred ninety-three thousand five hundred twelve"