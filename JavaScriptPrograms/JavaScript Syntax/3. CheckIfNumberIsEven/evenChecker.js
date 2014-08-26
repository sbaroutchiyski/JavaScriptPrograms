function evenNumber(value) {
	//Checks if an integer number is even.
	var number = parseInt(value, 10);
	var isEven = false;
	if (number % 2 == 0) {
		isEven = true;
	}
	console.log(isEven);
}

evenNumber(3);
evenNumber(127);
evenNumber(588.98);
