function wordCombo(string, dictionary) {
  var dict = {};
  //make an object out of the dictionary
  for(var i = 0; i < dictionary.length; i++) {
    dict[dictionary[i]] = true;
  }

  var results = [];

  //recurse through the string
  var recurse = function(leftovers, currentstring, currentarray, spacecount) {
    //base case - if concatanated version of current array's length minus the space count equals string.length - add to results array
    if(currentarray.concat('').length === string.length - spacecount) {
      results.push(currentarray.concat(''));
    }

    //loop through string, adding each character to current string
    for(var j = 0; j < leftovers.length; j++){
      currentstring += leftovers.charAt(j);
      //if the current string is in the dictionary
      if(dict[currentstring]) {
        //add space to current string, increase space count
        currentstring+= ' ';
        //add to current array
        currentarray.push(currentstring);        
        //recurse on remaining characters
        recurse(, '', currentarray, spacecount+1);
      }

      
    }

  }


  recurse(string, '', [], 0);


  return results;
}