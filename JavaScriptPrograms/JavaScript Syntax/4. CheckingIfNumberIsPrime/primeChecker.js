function isPrime(value) {
	//Checks if an integer number is prime.
	var number = parseInt(value, 10);
	var primeNumber = false;
	var counter = 0;
	for (var i = 2; i < 10; i++) {
		if (number % i == 0) {
			counter++;
		}
	}
	if ((counter < 1 && number >= 10) || (counter == 1 && number < 10)) {
		primeNumber = true;
	}
	console.log(primeNumber);
}

isPrime(7);
isPrime(254);
isPrime(587);
