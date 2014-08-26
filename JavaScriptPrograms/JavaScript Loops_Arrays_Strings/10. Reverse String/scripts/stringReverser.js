function reverseString(array) {
	// Reverses string and returns it. 
	var reversed = "";
	for (var i = 0; i < array.length; i++) {
		reversed += array[array.length - 1 - i];
	}
	console.log("Array: " + array);
	console.log("Reversed: " + reversed + "\n");
}

reverseString('sample');
reverseString('softUni');
reverseString('java script'); 