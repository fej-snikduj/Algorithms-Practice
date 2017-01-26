var rockPaperPermutation = function(roundCount) {

  //define a results array
  var results = [];

  //define a rock paper scissor array
  var rps = ['r', 'p', 's'];

  //define recursive function
  var recurse = function(currentPermutation) {
    //define a base case
    //if the current length of string equal round count, add it to results array
    if (currentPermutation.length === roundCount) {
      results.push(currentPermutation);
      return;
    }

    //for each value in the rps array, join it with each value in rps array
    for (var i = 0; i < rps.length; i ++) {
      currentPermutation = currentPermutation + rps[i];
      recurse(currentPermutation);
      currentPermutation = currentPermutation.substr(0, currentPermutation.length-1);
    }
  }
  //make recursive function call
  recurse('');
  //return the results array
  return results;

}






// fun(0) //[]
// fun(1) //['r', 'p', 's'];
// fun(2) // ['rr', 'rp', 'rs', 'pr', 'pp', 'ps', 'sr', 'sp', 'ss'];

// //how many permutations? 3^numberofgames.  

// //r will be first 3^numberofgames/3 times.  