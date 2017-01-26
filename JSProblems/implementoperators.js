var multiply = function(x, y) {
  sum = 0
  if (x < 0 && y > 0) {
    for (var i = 0; i < y; i++) {
      sum += x;
    }
  } else if (x > 0 && y < 0) {
    for (var i = 0; i < x; i++) {
      sum += y;
    } 
  } else if (x < 0 && y < 0) {
      for (var i = 0; i > y; i--) {
        sum += x;
      }
      sum = Number(sum.toString().split('-').splice(1).join(''));
  } else {
      for (var i = 0; i < y; i++) {
        sum +=x;
      }
  }
  return sum;
}

var divide = function(x, y) {
  var integer = x;
  var divisor = y;
  var count = 0;
  while(integer > divisor) {
    count++
    integer = integer - divisor;
  }
  return count+1;
};

var modulo = function(x, y) {
  // Your code goes here
};


// Implement Operators
// Write three functions to replace the multiply, divide, and modulo operators. The only operators you may only use in your solution are addition and subtraction. Your functions will only have to handle integer math.

// Note: Don’t put any complex math in the comments in your code, or the tests may fail.

// EXAMPLES:

// multiply(5, 2) === 10

// divide(5, 2) === 2

// modulo(5, 2) === 1