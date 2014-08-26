function compareChars(firstArray, secondArray) {
	// Compares two arrays of chars lexicographically (letter by letter). 
	var isEqual = true;
	for (var i = 0; i < firstArray.length; i++) {
		if (firstArray[i] != secondArray[i]) {
			isEqual = false;
			break;
		}
	}
	if (isEqual == true) {
		console.log("Equal");
	} else {
		console.log("Not equal");
	}
}

compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'], ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']);
compareChars(['3', '5', 'g', 'd'], ['5', '3', 'g', 'd']);
compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'], ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']); 