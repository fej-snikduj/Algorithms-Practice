function coinSums (total) {
  // Write your code here, and
  // return your final answer.
  //define our counter
  var counter = 0;

  //define recursive function
  var recurse = function(currentCombination, startingIndex) {
    //define base case, if sum of currentCombination is equal to total, increase count
    var sum = currentCombination.reduce(function(a,b) {return a + b}, 0);

    if (sum === total) {
      counter++;
      return;
    }

    if (sum > total) {
      return;
    }

    //define recursive case
    for (var i = startingIndex, length = coins.length; i < length; i++) {
      currentCombination.push(coins[i]);
      recurse(currentCombination, startingIndex);
      currentCombination.pop();
      startingIndex++;
    }





  }

  recurse([], 0);



  //return counter
  return counter;
}






// Coin Sums
// In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

// 1p
// 2p
// 5p
// 10p
// 20p
// 50p
// £1 (100p)
// £2 (200p)
// Given a given number of pence, return the possible number of ways someone could make change.

// It is possible to make 5 pence in the following ways:

// 5 * 1p

// 3 * 1p + 1 * 2p

// 1 * 1p + 2 * 2p

// 1 * 5p
// In other words, find all the possible combinations of coins that sum to a given pence value.


// Parameters:

// total (required) - the number of pence

// You've got Helpers! (click to view code)
// coins
var coins = [1,2,5,10,20,50,100,200];
// Examples
// Input Output
// total:
// 1 1
// total:
// 17  28