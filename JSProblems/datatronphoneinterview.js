
/* 
Your previous Ruby content is preserved below:
 
# Suppose a sorted array is rotated at some pivot unknown to you beforehand.
# (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
# You are given a target value to search. If found in the array return its index, otherwise return -1.
# You may assume no duplicate exists in the array.

 */

//search for 1 in [4 5 6 7 0 1 2]



function search(numberArray, target) {
  //compare number at first index to target
  if (target >= numberArray[0]) {
    for(var i = 0; i < numberArray.length; i++) {
      if (numberArray[i] === target) {
        return i;
      }
      if (numberArray[i] > target) {
        return -1;
      }
    }
    
  } else {
    for(var j = numberArray.length - 1; j >= 0; j--) {
      if (numberArray[j] === target) {
        return j;
      }
      if (numberArray[j] < target) {
        return -1;
      }
    }
    
  } 
  return -1;
}


function binarySearch(numberArray, target) {
  
  var recursiveBinarySearch = function(leftIndex, rightIndex) {
  //compare middle number to target - base case
    var middleIndex = Math.floor((rightIndex - leftIndex) / 2) + leftIndex;
    if (target === numberArray[middleIndex]) {
      return middleIndex;
    } else {
      //target must be greater than leftIndex and less than middlenumber to recurse on left side
      if (target >= numberArray[leftIndex] && target <= numberArray[middleIndex -1]) {
          return recursiveBinarySearch(leftIndex, middleIndex - 1);
      } else if (target <= numberArray[rightIndex] && target >= numberArray[middleIndex + 1]) {
          return recursiveBinarySearch(middleIndex + 1, rightIndex);
      } else {
          return -1;
      }
    }
    
  }
  
  return recursiveBinarySearch(0, numberArray.length - 1);


}
  
var binaryTests = [
  binarySearch([4, 5, 6, 7, 0, 1, 2], 4) === 0,
  binarySearch([4, 5, 6, 7, 0, 1, 2], 5) === 1,
  binarySearch([4, 5, 6, 7, 0, 1, 2], 6) === 2,
  binarySearch([4, 5, 6, 7, 0, 1, 2], 7) === 3,
  binarySearch([4, 5, 6, 7, 0, 1, 2], 2) === 6
]

var searchTests = [
  search([4, 5, 6, 7, 0, 1, 2], 4) === 0,
  search([4, 5, 6, 7, 0, 1, 2], 5) === 1,
  search([4, 5, 6, 7, 0, 1, 2], 6) === 2,
  search([4, 5, 6, 7, 0, 1, 2], 7) === 3,
  search([4, 5, 6, 7, 0, 1, 2], 2) === 6
]

console.log(binaryTests, 'binary tests');
console.log(searchTests, 'search tests');