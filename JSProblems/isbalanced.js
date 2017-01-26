function isBalanced (str) {
  var openBrackets = {
    '{': '}',
    '[': ']',
    '(': ')'
  };
  var closeBrackets = {
    '}': '{',
    ']': '[',
    ')': '('
  };
  var openBracketStorage = [];

  for(var i = 0; i < str.length; i++) {
    if(str.charAt(i) in openBrackets) {
      //if the character is an open bracket, put it in storage
      openBracketStorage.push(str.charAt(i));
    }
    if(str.charAt(i) in closeBrackets) {
      //if the character is a closed bracket, make sure it matches the latest open bracket
      if(openBracketStorage.pop() !== closeBrackets[str.charAt(i)]){
        return false
      }
    }
  }

  //after iterating through the string, the storage array must be empty for the expression to be balanced
  if(openBracketStorage.length === 0) {
    return true;
  } else {
    return false;
  }
}

// Balanced Brackets
// Given a string, return true if it contains all balanced parenthesis (), curly-brackets {}, and square-brackets [].

// Examples
// Input Output
// str:
// "(x + y) - (4)" true
// str:
// "(x + y) - (4)" true
// str:
// "(((10 ) ()) ((?)(:)))" true
// str:
// "[{()}]"  true
// str:
// "(50)(" false
// str:
// "[{]}"  false

//push all open brackets to an array.  as soon as you come upon a closed bracket, check to make sure its the last open bracket in the array.  if not, return false.