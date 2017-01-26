var stringChecker = function(string) {
  //store brackets in object
  var obj = {
    '{': '}',
    '[': ']',
    '(': ')'
  };

  var storageArray = [];

  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) in obj) {
      storageArray.push(string.charAt(i));
    } else {
      if (string.charAt(i) !== obj[storageArray.pop()]) {
        return false;
      }
    }

  }

  if (storageArray.length === 0) {
    return true
  } else {
    return false;
  }
}