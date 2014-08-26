function sortArray(numbers) {
	// Sort array using "Selection Sort" algorithm.
	var min = 0;
	var temp = 0;
	var index = 0;
	var oldNumbers = "" + numbers;
	for (var i = 0; i < numbers.length; i++) {
		min = numbers[i];
		for (var j = i; j < numbers.length; j++) {
			if (min >= numbers[j]) {
				min = numbers[j];
				index = j;
			}
		}
		temp = numbers[i]; //swap elements
		numbers[i] = min;
		numbers[index] = temp;
	}
	console.log("Unsorted array:" + oldNumbers);
	console.log("Sorted array:" + numbers);
}

sortArray([5, 4, 3, 2, 1]);
sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]);
