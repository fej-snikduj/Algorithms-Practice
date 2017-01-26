function telephoneWords (digitString) {
  // Write your code here, and
  // return your final answer.
  //create key-value object
  var keypad = {
    '0': ['0'],
    '1': ['1'],
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  };

  //initialize result array
  var results = [];
  //create array of number-strings from input string
  var inputString = digitString.split("");

  //define recursive function

  var permutate = function(stringNumArray, arrayIndex, currentPerm) {
    //define base case - if the currentPerm string equals the length of the digit string
    if(currentPerm.length === digitString.length) {
      results.push(currentPerm);
      return;
    }

    //recursive case - take the current inputString number and loop through the possible corresponding letters, recurivelsy calling the next number
    for (var i = arrayIndex; i < stringNumArray; i++) {
      currentPerm = currentPerm + keypad[stringNumArray[i]]s[i];
      perutate()
    } 




  }


  permutate(inputString, 0, "");


  return results;

}





// Telephone Words
// Each number key on a standard phone keypad has a set of Latin letters written on it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg

// Businesses often try to come up with clever ways to spell out their phone number in advertisements to make it more memorable. But there are a lot of combinations!

// Write a function that takes up to four digits of a phone number, and returns a list of all of the words (in alphabetical order) that can be written on the phone with that number. (You should return all permutations, not only English words.)

// Examples
// Input Output
// digitString:
// "0002"  [ "000A", "000B", "000C" ]
// digitString:
// "1123"  [ "11AD", "11AE", "11AF", "11BD", "11BE", "11BF", "11CD", "11CE", "11CF" ]