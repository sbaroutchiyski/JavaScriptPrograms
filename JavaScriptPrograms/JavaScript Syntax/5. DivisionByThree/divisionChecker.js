function divisionBy3(value) {
	//Checks if the sum is divided by 3 without remainder.
	var number = parseInt(value, 10);
	if (number % 3 == 0) {
		console.log("the number is divided by 3 without remainder");
	} else {
		console.log("the number is not divided by 3 without remainder");
	}
}

divisionBy3(13);
divisionBy3(205);
divisionBy3(591);
