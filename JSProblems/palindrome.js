// Longest Palindrome
// Implement a function that finds the longest palindrome in a given string. For example, in the string “My dad is a racecar athlete”, the longest palindrome is “a racecar a”. Count whitespaces as valid characters. Other palindromes in the above string include “dad”, “ete”, “ dad “ (including whitespace on each side of dad).

// Examples
// Input Output
// string:
// "aibohphobia" "aibohphobia"
// string:
// "My dad is a racecar athlete" "a racecar a"


function longestPalindrome (string) {
  // Write your code here, and
  // return your final answer.
  //create a palindrome array
  var palindromes = [];
  var match = true;

  var recurse = function(options, left, right) {
  //base case - if indices are the same or the difference is 0, then the comb is a palindrome and add it to the array
  if (right - left === 1 || right - left === 2) {
    palindromes.push(options.substring(left, right+1));
    return;
  }

  //recurseive case
  for (var i = left; i < options.length-1; i++) {
      //look for matching character
      for (var j = right; j >= i; j--) {
        if (options.charAt(j) === options.charAt(i) && match === true) {
          recurse(options, i+1, j-1);
        }
        else {
          match = false;
        }
      }
  }


  //iterate over the string, looking for the first letter that has a second letter match
    //if match is not found
      //move on to text letter
    //if match is found
      //check to see if inside letter adjacent to outside letters match
      //if yes
        //repeat
      //if no, break and move on to next letter
    
  }
  recurse(string, 0, string.length-1);



  //return the longest palindrome
  return palindromes.reduce(function(prev,curr) {return curr.length > prev.length ? curr: prev});
}


//input - string
//output - a string - the longest palindrome
//constraints - none
//edge cases - word is a palindrome


//"My dad is a racecar athelete"

//you have to find two letters that are the same, and then iteratively look at the adjacent letters to make sure they are also the same, this must continue until you find the longest palindrome

//we could make an ojbect with the letters and the value being the indices of the letters;

// {
//   m: [0];
//   y: [1];
//   ' ': [2, 6, 9, 11, 19];
//   d: [3,5],
//   a: [4, 13, 17],
//   i: [7],
//   s: [8],
//   r: [12, 18],
//   c: [14, 16],
//   e: [15]
// }

//ala - left = 0, right = 2.  this works
//alla - left = 0, right = 3 --> recurse.  now left = 1, right = 2.  this works

