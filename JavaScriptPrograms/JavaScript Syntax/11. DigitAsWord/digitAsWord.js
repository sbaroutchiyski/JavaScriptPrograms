function digitAsWord(value) {
	//Prints the name of an integer number n (0<n<10) in English using switch statement.
	var digitAsWord;
	switch(value) {
		case 0:
			digitAsWord = "zero";
			break;
		case 1:
			digitAsWord = "one";
			break;
		case 2:
			digitAsWord = "two";
			break;
		case 3:
			digitAsWord = "three";
			break;
		case 4:
			digitAsWord = "four";
			break;
		case 5:
			digitAsWord = "five";
			break;
		case 6:
			digitAsWord = "six";
			break;
		case 7:
			digitAsWord = "seven";
			break;
		case 8:
			digitAsWord = "eight";
			break;
		case 9:
			digitAsWord = "nine";
			break;
		default:
			console.log("The number is out of range(0-9).");
			return;
	}
	console.log(digitAsWord);
}

digitAsWord(4);
digitAsWord(6);
digitAsWord(8);
