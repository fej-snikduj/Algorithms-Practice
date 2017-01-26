function powerSet (string) {
  // Write your code here, and
  // return your final answer.

  //initialize character object
  var characterObject = {};
  //iterate over the string adding unique values to object
  for (let i = 0; i < string.length; i++){
    characterObject[string.charAt(i)] = true;
  }
  //join the keys of the object into a string
  var uniqueString = Object.keys(characterObject).join('');

  //
}


//input - string
//output - alphabetically sorted array of strings, with each item sorted alphabetically as well
//edge case - an empty string

// Power Set
// Return an array that contains the power set of a given string. The power set is a set of all the possible subsets, including the empty set.

// Make sure your code does the following:

// All characters in a subset should be sorted alphabetically, and the array of subsets should be sorted alphabetically.
// Sets of the same characters are considered duplicates regardless of order and count only once, e.g. ‘ab’ and ‘ba’ are the same.
// Duplicate characters in strings should be ignored; for example, ‘obama’ should be evaluated as if it only contained one ‘a’. See the result below.
// Examples
// Input Output
// string:
// "a" [ "", "a" ]
// string:
// "ab"  [ "", "a", "ab", "b" ]
// string:
// "horse" [ "", "e", "eh", "eho", "ehor", "ehors", "ehos", "ehr", "ehrs", "ehs", "eo", "eor", "eors", "eos", "er", "ers", "es", "h", "ho", "hor", "hors", "hos", "hr", "hrs", "hs", "o", "or", "ors", "os", "r", "rs", "s" ]