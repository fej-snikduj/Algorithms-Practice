var fun = function evenOccurrence (arr) {
  // Write your code here, and
  // return your final answer.
  //define the length and result

  var result = "no even occuring numbers";
  //create a copy of the array so we can mutate it in for loop
  var array = arr.slice();

  //create an object to store already called values as keys
  var alreadyCalled = {};
  
  //create two for loops, iterating over all items in array
  for (var i = 0; i < array.length; i++) {
    var evenCount = 1;
    for (var j = i+1; j < array.length; j++){
      if (array[i] === array[j]) {
        evenCount++;
        array.splice(j,1);
        j--;
      }
      if (evenCount%2 === 0 && j === array.length -1  && evenCount !== 0) {
        result = array[i];
        return result;
      }
    }
  }

  //return the result
  return result;
}











// Even Occurrence
// 3/4/16 UPDATE: If you solved this challenge previously, you may have to update your function name from evenOccurence (with 1 r) to evenOccurrence (with 2 rs)


// Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

// Examples
// Input Output
// arr:
// [ 1, 3, 3, 3, 2, 4, 4, 2, 5 ] 2
// arr:
// [ "cat", "dog", "dig", "cat" ]  "cat"

//iterate over the array - keep a seperate count for each item.  As soon as you find one that only occurs an even number of times, return that number.