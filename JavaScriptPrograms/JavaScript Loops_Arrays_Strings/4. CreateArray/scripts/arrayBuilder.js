function createArray() {
	//Allocates array of 20 integers and initializes each element by its index multiplied by 5.
	var myArray = new Array(20);
	for (var i = 0; i < myArray.length; i++) {
		myArray[i] = i * 5;
	}
	console.log(myArray);
}

createArray();
