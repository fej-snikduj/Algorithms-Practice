function spiralTraversal (matrix) {
  // Write your code here, and
  // return your final answer.
  // define output array and push first row into array
  var spiral = [].concat(matrix[0]);
  var upper = 1;
  var lower = matrix.length -1;
  var left = 0;
  var right = matrix[0].length - 1;
  var rotationCount = 1;
  //if rotation count is even, we are iterating over the colouns with row fixed
  //if rotation count is odd, we are iterating over the rows with column fixed

  while(left !== right + 1 && upper !== lower + 1) {
    //iterate over the columns right to left with fixed row
    if (rotationCount%2 === 0 && rotationCount%4 !== 0) {
      for (var i = right; i >= left; i--) {
        spiral.push(matrix[lower][i]);
      }
      lower--;
      rotationCount++;

    } else if(rotationCount%2 === 0 && rotationCount%4 === 0){ //iterate over the columns left to right with fixed row
      for (var i = left; i <= right; i++) {
        spiral.push(matrix[upper][i])

      }
      upper++;
      rotationCount++;

    } else if ((rotationCount - 1) % 4 === 0) {//iterate over the rows top to bottom with fixed column
      for (var i = upper; i <= lower; i++) {
        spiral.push(matrix[i][right]);

      }
      right--;
      rotationCount++;

    } else { //iterate over the rows bottom to top with fixed column
      for (var i = lower; i >= upper; i--) {
        spiral.push(matrix[i][left]);

      }
      left++;
      rotationCount++;

    }

    //one final for loop

  }
  return spiral;
}




// Spiral Traversal
// Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
// and prints out every value found, but in a spiral from the upper left in to the center.

// Examples
// Input Output
// matrix:
// [ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ], [ 11, 12, 13, 14, 15 ], [ 16, 17, 18, 19, 20 ], [ 21, 22, 23, 24, 25 ] ] [ 1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13 ]
// matrix:
// [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10, 11, 12 ], [ 13, 14, 15 ], [ 16, 17, 18 ], [ 19, 20, 21 ], [ 22, 23, 24 ] ] [ 1, 2, 3, 6, 9, 12, 15, 18, 21, 24, 23, 22, 19, 16, 13, 10, 7, 4, 5, 8, 11, 14, 17, 20 ]
// matrix:
// [ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ]  [ 1, 2, 3, 4 ]
// matrix:
// [ [ 1, 2, 3, 4, 5, 6, 7 ] ] [ 1, 2, 3, 4, 5, 6, 7 ]
// Submit Code

// 
