// Character Frequency
// Write a function that takes as its input a string and returns an array of arrays as shown below sorted in descending order by frequency and then by ascending order by character.

// Examples
// Input	Output
// string:
// "aaabbc"	[ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
// string:
// "mississippi"	[ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
// string:
// ""	[ ]

var fun = function (string) {
  // Write your code here, and
  // return your final answer.
  //break the string into an array
  var stringArray = string.split('');
  var occurrence = {};
  var occurrenceArray = [];

  //iterate over the string array, adding the character as a key to an object, and the value as the count of occurences.

  for (var i = 0, length = stringArray.length; i < length; i++) {
  	if(stringArray[i] in occurrence) {
  		occurrence[stringArray[i]]++;
  	} else {
  		occurrence[stringArray[i]] = 1;
  	}
  }

  //return the object as an array of tuples
  for (var item in occurrence) {
  	occurrenceArray.push([item, occurrence[item]]);
  }

  //sort the array alphabetically
  occurrenceArray.sort();
  //sort the array numerically - cannot use Array.prototype.sort method because it doesn't keep original order.
  //use insertion sort
  for (var i = 0; i < occurrenceArray.length; i++){
  	for (var j = i; j >= 1; j--) {
  		if (occurrenceArray[j][1]>occurrenceArray[j-1][1]){
  			var temp = occurrenceArray[j];
  			occurrenceArray[j] = occurrenceArray[j-1]
  			occurrenceArray[j-1] = temp;
  		}
  	}
  }
  

  return occurrenceArray;

}
