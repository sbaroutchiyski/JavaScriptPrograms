function findMaxSequence(array) {
	// Finds the maximal increasing sequence in an array of numbers and returns the result as an array. 
	var subArray = [];
	var maxCount = 1;
	var maxIndex = 0;
	for (var i = 0; i < array.length; i++) {
		var count = 1;
		var index = i;
		var sequence = "";
		var numbers = array[i];
		for (var j = i + 1; j < array.length; j++) {
			if (numbers < array[j]) {
				count++;
				index++;
			} else {
				break;
			}
		}
		if (count > maxCount) {
			maxCount = count;
			maxIndex = index;
		}
	}
	var min = maxIndex - maxCount + 1;
	var max = maxIndex + 1;
	var subIndex=0;
	for (var i = min; i < max; i++) {
		subArray[subIndex] = array[i];
		subIndex++;
	}
	if (maxCount > 1) {
		console.log("Array: " + array);
		console.log("Maximal increasing sequence: " + subArray);
	} else {
		console.log("Array: " + array);
		console.log("Maximal increasing sequence: no");
	}
}

findMaxSequence([3, 2, 3, 4, 2, 2, 4]);
findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);
findMaxSequence([3, 2, 1]);
