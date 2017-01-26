var outerVar = 5;

var funA = function() {
	var varA = Math.random()*10;
	var funB = function(){
		var varB = Math.random()*10;
		var array = [varA, varB, varA*varB];
		return array;
	};
	return funB;
}

var once = function(func) {
	//declare boolean value that deterines if function has already been called
	var alreadyCalled = false;
	//we need to declare results outside of the return function.  Why?  So that the function encloses it.  We don't want the results value to change everytime the return function is called.  We want to be able to store the results in the execution context of the once function.  That way we have access to it everytime we call the return function.
	var results = [];
	//what should I return?  An anonymous function?  or the actual function?
	return function() {
		if (!alreadyCalled) {
			results = func.apply(this, arguments);
			alreadyCalled = true;
		}
		return results;
	}
}

var obj = {a: 1,
			b: function(x, y) {
				return x = [this.a, x, y] || 5;
			}};
var objBOnce = once(obj.b).bind(obj);

var memoize = function(func) {
	//we need to delcare an object to store our arguments in.  The key of the object will be a stringified arguments array, and the value will be the result of the returned function for that given set of arguments.
	var argsAndResults = {};
	//we can solve this with an 
	var alreadyCalled = false;
	return function() {
		var args = JSON.stringify(arguments);
		if (args in argsAndResults) {
			return argsAndResults[args];
		} else {
			return argsAndResults[args] = func.apply(this, arguments);
		}
	};
};

// return function could also be simplified as follows
return function() {
	var args = JSON.stringify(arguments);
	return argsAndResults[args] = argsAndResults[args] || func.apply(this, arguments);
}

// 	}

// var memoize = function(func) {

//     var memos = {};
//     return function() {
//       var serialization = JSON.stringify(arguments);
//       return memos[serialization] = memos[serialization] || func.apply(this, arguments);
//     };
// };





var objMemoize = memoize(obj.b).bind(obj);
//objMemoize(3,4) // [1,3,4], first time called;
//objMemoize(4,5) // [1,4,5], first time called;
//objMemoize(3,4) // [1,3,4] - function returns previously saved value




















