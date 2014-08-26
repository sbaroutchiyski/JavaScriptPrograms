function findMinAndMax(value) {
	//Finds the minimum and the maximum number. 
	var min = value[0];
	var max = value[0];
	for (var i = 1; i < value.length; i++) {
		if (min >= value[i]) {
			min = value[i];
		}
		if (max <= value[i]) {
			max = value[i];
		}
	}
	console.log("Array: " + value);
	console.log("Min-> " + min);
	console.log("Max-> " + max);
}

findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31]);
findMinAndMax([2, 2, 2, 2, 2]);
findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]); 