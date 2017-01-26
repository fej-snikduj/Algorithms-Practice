var reduceRight = function(array, func, start){
	var acc, i;
	length = array.length;
	//if length is three then set an accumulator to start value - and set the iteration variable to the last array value
	if (arguments.length === 3) {
		acc = start;
		i = length - 1;
	//if value not provided, set accumulator to last value in array and set the iteration variable to the second to last array value
	} else {
		acc = array[length - 1];
		i = length - 2;
	}

	//loop through the array starting at the iteration variable given above and moving toward its first value;
	for (i; i>=0; i--) {
		acc = func(array[i], acc);
	}


	return acc;
};
