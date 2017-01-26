function translateRomanNumeral (rn) {
  // Write your code here, and
  // return your final answer.
  var length = rn.length;
  var sum = 0;

  //take care of edge cases;
  if (DIGIT_VALUES[rn.charAt(0)] > 0) {
    sum += DIGIT_VALUES[rn.charAt(0)];
  } else if (rn == '') {
    return 0;    
  } else {
    return "null";
  }

  //iterate over the roman numeral string
  for (var i = 1; i < length; i++) {
    if (DIGIT_VALUES[rn.charAt(i)] <= DIGIT_VALUES[rn.charAt(i-1)]){
      sum += DIGIT_VALUES[rn.charAt(i)];
    }
    else {
      sum += DIGIT_VALUES[rn.charAt(i)] - 2*DIGIT_VALUES[rn.charAt(i-1)];
    }
  }
  return sum;
}



var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};


/*
input (roman numeral in a string)
output (number corresponding to roman numeral value)






*/

// Roman Numeral Translator
// Given a roman numeral as input, write a function that converts the roman numeral to a number and outputs it.

// In a roman numeral, each character adds its value to the total. See the helper object DIGIT_VALUES for the correspondence between roman numeral characters and integers.
// VI = 6 (5 + 1 = 6)
// LXX = 70 (50 + 10 + 10 = 70)
// MCC = 1200 (1000 + 100 + 100 = 1200)

// When a smaller numeral appears before a larger one, it becomes a subtractive operation. You can assume only one smaller numeral may appear in front of larger one.
// IV = 4 (5 – 1 = 4)
// XC = 90 (100 – 10 = 90)
// CM = 900 (1000 – 100 = 900)

// You should return "null" on invalid input.

// You've got Helpers! (click to view code)
// DIGIT_VALUES Object
// Examples
// Input Output
// romanNumeral:
// "LX"  60
// romanNumeral:
// "IV"  4
// romanNumeral:
// "horse" "null"
// romanNumeral:
// ""  0