function displayProperties() {
	//Displays all the properties of the "document" object in alphabetical order.
	var documentProperties = [];
	for (var properties in document) {
		documentProperties.push(properties);
	}
	documentProperties.sort();
	console.log(documentProperties);
}

displayProperties();
