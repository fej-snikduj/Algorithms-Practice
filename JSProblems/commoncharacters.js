commonCharacters = function(string1, string2){
  //initialize memory object
  var memObj = {};
  //initialize results string;
  var results = '';

  //store the first strings characters in an object
  for(let character of string2) {
    memObj[character] = true;
  };

  //iterate over string2 adding 
  for(let character of string1) {
    if (memObj[character]) {
      //ignore spaces
      if (character !== ' '){
        results += character;
      }
      //avoid repeated characters
      memObj[character] = false;
    }
  }
  return results;
};





// Common Characters
// Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.

// Your function should return the common characters in the same order that they appear in the first argument. Do not return duplicate characters and ignore whitespace in your returned string.

// Example: commonCharacters('acexivou', 'aegihobu')

// Returns: 'aeiou'