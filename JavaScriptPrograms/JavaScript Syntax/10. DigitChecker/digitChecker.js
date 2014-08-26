function checkDigit(value) {
	//finds if the third digit (right-to-left) of an integer number n (n>1000) is 3.
	var isThree = false;
	if (value < 1000) {
		console.log("The number must be bigger than 1000");
		return;
	}
	var number = (value % 1000) / 100;
	if (parseInt(number, 10) == 3) {
		isThree = true;
	}
	console.log(isThree);
}

checkDigit(1235);
checkDigit(25368);
checkDigit(123456);
