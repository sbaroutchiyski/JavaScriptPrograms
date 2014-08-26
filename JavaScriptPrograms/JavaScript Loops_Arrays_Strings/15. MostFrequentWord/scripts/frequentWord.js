function findMostFreqWord(text) {
	// Finds the most frequent word in a text and prints it.
	var str = text.toLowerCase().match(/\w+/g);
	str.sort();
	var maxCount = 0;
	var maxWord = "";
	var repeated = [];
	for (var i = 0; i < str.length; i++) {
		var temp = str[i];
		var count = 1;
		for (var j = i + 1; j < str.length; j++) {
			if (temp == str[j]) {
				count++;
			}
		}
		if (count > maxCount) {
			maxCount = count;
		}
		repeated[i] = count;
	}
	for (var i = 0; i < repeated.length; i++) {
		if (repeated[i] == maxCount) {
			console.log(str[i] + " -> " + maxCount + " times");
		}
	}
	console.log("\n");
}

findMostFreqWord('in the middle of the night');
findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.'); 