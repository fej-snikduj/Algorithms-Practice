//input - string
//output - array of strings, all combinations of the characters in the string
//constraints - none
//edge cases - empty

function allAnagrams (string) {
  
  //define a length variable
  var length = string.length;
  //create an object to store anagrams
  var anagramObj = {};
  //create an array to push anagrams to;
  var anagramArray = [];

  //recursively go through string
  var recurse = function(index, currPerm, leftOvers) {
    //base case - length leftOvers = 0;
    if (currPerm.length === length) {
      //check to see if current combination has been done already
      if (!anagramObj[currPerm]) {
        anagramObj[currPerm] = 1;
        anagramArray.push(currPerm);
      }
      return;
    }
    //recursive case
    for (var i = index; i < length; i++) {
      currPerm += leftOvers.charAt(0);
      leftOvers = leftOvers.slice(1, leftOvers.length);
      recurse(index+1, currPerm, leftOvers);
      leftOvers = leftOvers + currPerm.substring(currPerm.length - 1);
      currPerm = currPerm.slice(0, -1);
    }

  }
  recurse(0, '', string);
  return anagramArray;

}



// All Anagrams
// Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array. At first, don’t worry about repeated strings. What time complexity is your solution?

// Parameters:

// string (required) - a string of characters.

// Examples
// Input Output
// string:
// "abc" [ "abc", "acb", "bac", "bca", "cab", "cba" ]