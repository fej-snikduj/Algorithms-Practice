var knapsack = function(maxWeight, ...items) {

  //initialize a storage array
  var storage = [];
  
  for(let item of items) {
      storage.push({value: item.value, weight: item.weight, ratio: item.value/item.weight});
  }
  
  //sort the storage array by ratio
  storage.sort(function(a, b) {
      return a.ratio < b.ratio;
  });
  
  //initialize for loop variables
  var maxValue = 0, remainingWeight = maxWeight, sackValue = 0;
  
  for(let i = 0; i < storage.length; i++) {
      for(let j = i; j < storage.length; j++) {
          //check to see how many times the current item can fit in the sack
          let divNumber = Math.floor(remainingWeight/storage[j].weight);
          //if number is equal to zero, continue loop
          if(divNumber === 0) {
              continue;
          } else {
            //add value and subtract from weight
            maxValue = maxValue + divNumber * storage[j].value;
            remainingWeight = remainingWeight - storage[j].weight * divNumber;
          }
          
      }
     
      //update the sackValue if iteration's value is greater
      if (maxValue >= sackValue) {
          sackValue = maxValue;
      }
      //reset remainingWeight and maxValue
      remainingWeight = maxWeight;
      maxValue = 0;
  }

  //return the maxValue
  return sackValue;
}


// TODO: Write test cases!
//tests should be an array of true values once function is implemented correctly
tests = [
//it should return 0 if all items are too heavy
knapsack(10, {value: 100, weight: 15}) === 0,

//it should return 0 when there are no items
knapsack(10) === 0,

//it should return correct value for multiple items
knapsack(10, {value: 1, weight: 1}, {value: 2, weight: 2}, {value: 3, weight: 3}, {value: 4, weight: 4}, {value: 5, weight: 5}, {value: 6, weight: 6}, {value: 7, weight: 7}, {value: 8, weight: 8}, {value: 9, weight: 9}, {value: 10, weight: 10}) === 10,
knapsack(20, {value: 10, weight: 1}, {value: 9, weight: 2}, {value: 8, weight: 3}, {value: 7, weight: 4}, {value: 6, weight: 5}, {value: 5, weight: 6}, {value: 4, weight: 7}, {value: 3, weight: 8}, {value: 2, weight: 9}, {value: 1, weight: 10}) === 200,
    knapsack(100, {value: 198, weight: 99}, {value: 3.98, weight: 2}) === 199
]








// A Thief has a knapsack that can hold X lbs of stolen goods
// Each stolen good is worth a certain amount of cash, but
// the stolen good also weighs a certain weight. This means that
// the thief has to pick an optimal combination of items!
// The Thief can't pick the same item twice.

// What is the maximum worth of goods that the thief can steal?