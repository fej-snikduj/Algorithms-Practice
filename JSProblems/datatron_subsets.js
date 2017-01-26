

input = [1, 2, 3];


output = 
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
];


//input is array
//output array of arrays


function findSubsetsOf(inputArray) {
    //create a results array
    var results = [[]];
    
    for (var i = 0; i < inputArray.length; i++) {
      for (var j = 0; j < results.length; j++) {
        results.push(results[j].concat(inputArray[i]));
      }
    }

    return results;
}


findSubsetsOf(input);