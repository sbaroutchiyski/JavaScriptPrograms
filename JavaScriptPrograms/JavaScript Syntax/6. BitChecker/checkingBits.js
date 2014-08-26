function checkingBits(value) {
	//Finds if the bit 3 an integer number.Result is true or false.
	var number = parseInt(value);
	number = (number >> 3) & 1;
	var checker = false;
	if (number == 1) {
		checker = true;
	}
	return checker;
}

console.log(checkingBits(333));
console.log(checkingBits(425));
console.log(checkingBits(32567564754));
