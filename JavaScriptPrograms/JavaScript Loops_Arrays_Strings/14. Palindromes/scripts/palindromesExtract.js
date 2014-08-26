function findPalindromes(text) {
	// Extracts from a given text all palindromes, e.g. "ABBA", "lamal", "exe". 
	var palindromes = "";
	var isPalindrome = false;
	var str = text.toLowerCase().match(/\w+/g);
	for (var i = 0; i < str.length; i++) {
		var temp = str[i];
		for (var j = 0; j < temp.length / 2; j++) {
			if (temp[j] == temp[temp.length - 1 - j]) {
				isPalindrome = true;
			} else {
				isPalindrome = false;
				break;
			}
		}
		if (isPalindrome == true) {
			palindromes += temp + ", ";
		}
	}
	console.log("Sentence: " + text);
	console.log("Palindromes: " + palindromes.slice(0, palindromes.length - 2));
}

findPalindromes('There is a man, his name was Bob.'); 