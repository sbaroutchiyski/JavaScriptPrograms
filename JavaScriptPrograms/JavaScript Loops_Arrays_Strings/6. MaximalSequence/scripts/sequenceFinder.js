function findMaxSequence(array) {
	// Finds the maximal sequence of equal elements in an array and returns the result as an array. 
	var subArray = "";
	var numbersPart = "";
	var wordsPart = "";
	var maxNumberCount = 0;
	var maxNumber = 0;
	var maxWordCount = 0;
	var maxWordNumber = 0;
	var numberIndex = 0;
	var wordIndex = 0;
	for (var i = 0; i < array.length; i++) {
		var number = array[i];
		var numberCount = 1;
		var wordCount = 1;
		for (var j = i + 1; j < array.length; j++) {
			if (number == array[j] && typeof (array[j]) == 'number') {
				numberCount++;
			}
			if (number != array[j] && typeof (array[j]) == 'number') {
				break;
			}
			if (number == array[j] && typeof (array[j]) != 'number') {
				wordCount++;
			}
			if (number != array[j] && typeof (array[j]) != 'number') {
				break;
			}
		}
		if (numberCount >= maxNumberCount) {
			maxNumberCount = numberCount;
			maxNumber = number;
			numberIndex = i;

		}
		if (wordCount >= maxWordCount) {
			maxWordCount = wordCount;
			maxWordNumber = number;
			wordIndex = i;
		}
	}
	for (var i = 0; i < maxNumberCount; i++) {
		numbersPart += maxNumber + " ";
	}
	for (var i = 0; i < maxWordCount; i++) {
		wordsPart += maxWordNumber + " ";
	}
	if (maxNumberCount == maxWordCount) {
		if (numberIndex > wordIndex) {
			subArray = numbersPart;
		} else {
			subArray = wordsPart;
		}
	}
	if (maxNumberCount > maxWordCount) {
		subArray = numbersPart;
	}
	if (maxNumberCount < maxWordCount) {
		subArray = wordsPart;
	}
	console.log("Array: " + array);
	console.log("The maximal sequence of equal elements: " + subArray.split(" "));
}

findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
findMaxSequence(['happy']);
findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']); 