function findCardFrequency(text) {
	/*The function calculates and prints at the console
	the frequency of each card face in format "card_face -> frequency".
	 */
	var pattern = /[\d+\JDKA]+/g;
	var str = text.match(pattern);
	var countResults = [];
	for (var i = 0; i < str.length; i++) {
		var temp = str[i];
		var count = 1;
		for (var j = i + 1; j < str.length; j++) {
			if (temp == str[j] && temp != "counted") {
				count++;
				str[j] = "counted";
			}
		}
		if (temp != "counted") {
			countResults[i] = count;
		} else {
			countResults[i] = 0;
		}
	}
	for (var i = 0; i < str.length; i++) {
		if (str[i] != "counted") {
			console.log(str[i] + " -> " + countResults[i] * 10 + " %");
		}
	}
}

findCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');