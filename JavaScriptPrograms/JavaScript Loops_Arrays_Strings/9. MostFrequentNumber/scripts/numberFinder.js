function findMostFreqNum(array) {
	// Finds the most frequent number in an array. 
	// If multiple numbers appear the same maximal number of times, print the leftmost of them.
	var maxCount = 0;
	var mostFrequentNumber = 0;
	for (var i = 0; i < array.length; i++) {
		var temp = array[i];
		var count = 0;
		for (var j = i; j < array.length; j++) {
			if (temp == array[j]) {
				count++;
			}
		}
		if (count > maxCount) {
			maxCount = count;
			mostFrequentNumber = temp;
		}
	}
	console.log("Array: " + array);
	console.log("The most frequent number: " + mostFrequentNumber);
	console.log("Repetitions: " + maxCount + " (times)");
}

findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);
findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]); 