function checkBrackets(text) {
	// Check if in a given expression the brackets are put correctly. 
	var leftBracketCounts = 0;
	var rightBracketCounts = 0;
	var leftIndex = 0;
	var rightIndex = 0;
	for (var i = 0; i < text.length; i++) {
		if (text[i] == "(") {
			leftBracketCounts++;
			leftIndex = i;
		}
		if (text[i] == ")") {
			rightBracketCounts++;
			rightIndex = i;

		}
	}
	if ((leftBracketCounts == rightBracketCounts) && (leftIndex < rightIndex)) {
		console.log("Input string: " + text);
		console.log("Correct");
	} else {
		console.log("Input string: " + text);
		console.log("Incorrect");
	}
}

checkBrackets('( ( a + b ) / 5 – d )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )');
