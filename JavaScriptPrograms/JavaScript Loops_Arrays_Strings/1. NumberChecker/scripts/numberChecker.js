function printNumbers(n) {
	// finds all integer numbers from 1 to n that are not divisible by 4 or by 5.
	var numbers = "";
	for (var i = 1; i <= n; i++) {
		if (i % 4 != 0 && i % 5 != 0) {
			numbers += i + ", ";
		}
	}
	var splitedNumbers = numbers.slice(0, numbers.length - 2);
	if (n > 0) {
		console.log("Input: " + n);
		console.log("Result: " + splitedNumbers);
	} else {
		console.log("Input: " + n);
		console.log("Result: no");
	}
}

printNumbers(13);
printNumbers(20);
printNumbers(-5);
