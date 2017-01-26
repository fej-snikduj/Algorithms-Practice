var fun = function (array) {
  // Write your code here, and
  // return your final answer.
  //create a sum function
  var sum = function(a, b) { return a + b};
  var sumArray = [];

  //iterate over the array, creating a copy minus the last item, and reducing it
  for(var j = 0; j < array.length; j++){
    var copyArray = array.slice().splice(j, array.length);
    for (var i = 0; i < array.length; i++) {
      copyArray.splice(array.length - i, 1);
      sumArray.push(copyArray.reduce(sum, 0));
      }
  }


  return Math.max.apply(null, sumArray);
}






// Sum Array
// Given an array of numbers, calculate the greatest contiguous sum of numbers in it. A single array item will count as a contiguous sum.

// Examples
// Input Output
// array:
// [ 1, 2, 3 ] 6
// array:
// [ 4, -1, 5 ]  8
// array:
// [ 10, -11, 11 ] 10
// array:
// [ 1, 2, 3, -6, 4, 5, 6 ]  15