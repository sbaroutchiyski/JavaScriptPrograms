function replaceSpaces(text) {
	// Replaces the white-space characters in a text.
	var str = text.match(/\S+/g);
	var result = "";
	for (var i = 0; i < str.length; i++) {
		result += str[i];
	}
	console.log("Old string: " + text);
	console.log("New string: " + result);
}

replaceSpaces('But you were living in another world tryin\' to get your message through'); 