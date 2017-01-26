function firstNonRepeatedCharacter (string) {

  var storage = {};
  var repeatedChars = {};

  //loop over the string, inserting the character into the strogae array as a key
  //and the value as the index of the character in the string
  for (var i = 0; i < string.length; i++) {
    //if the character is encountered for first time, add to storage array
    if(!storage[string.charAt(i)] && !repeatedChars[string.charAt(i)]) {
      storage[string.charAt(i)] = i+1;
      //if the character has already been repeated, continue loop
    } else if (repeatedChars[string.charAt(i)]) {
      continue;
      //if the character is repeated for first time, delete form storage and 
      //add to repeated character array
    } else {
      delete storage[string.charAt(i)];
      repeatedChars[string.charAt(i)] = string.charAt(i);
    }
  };
  //initialize the value to compare against for finding the first occuring non repeated character
  firstNonRepeatCharIndex = string.length + 1;
  for (character in storage) {
    if (storage[character] < firstNonRepeatCharIndex) {
      //replace the current lowest with new lowest
      firstNonRepeatCharIndex = storage[character];
    }
  };

  if(Object.keys(storage).length === 0) {
    //if no values in storage array, there are no repeated characters
    return 'sorry';
  } else {
    //return the value in storage array with lowest index in string
    return string.charAt(firstNonRepeatCharIndex - 1);
  }
}


//input: a string
//output: the first non-repeated cahracter or sorry - both strings
//constraints: none
//edge cases: empty string, not a string, all repeated characters



// Non-repeated Character
// Given an arbitrary input string, return the first non-repeating character. For strings with all repeats, return 'sorry'.

// Examples
// Input Output
// string:
// "ABCDBIRDUP"  "A"
// string:
// "XXXXXXX" "sorry"
// string:
// "ALAMABA" "L"
// string:
// "BABA"  "sorry"