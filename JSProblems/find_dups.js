// Code goes here
/* Example:
     find_dups('hey') // returns []; (empty array)
     find_dups('mississippi') // returns ['i', 's', 'p'];
*/
var find_dups = function(string) {
	//split the string into an array of letters
	var stringArray = string.split('');
	var duplicatesObject = {};

	for (var i = 0; i < stringArray.length; i++){
		for (var j = i+1; j < stringArray.length; j ++){
			if (stringArray[i] === stringArray[j] && !(stringArray[i] in duplicatesObject) ) {
				duplicatesObject[stringArray[i]] = 0;
			}
		}
	}
	return Object.keys(duplicatesObject);
};

//Write the complexity of your solution here in a comment
//the time complexiy of the solution is n*log(n)

