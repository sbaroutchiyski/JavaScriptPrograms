function convertKWtoHP(value) {
	//Convert kW to horse power HP.
	var hp = 0.746 * value;
	var precision = 4;
	var realNumber = Math.floor(hp);
	var fraction = (hp - realNumber) + "";
	var reminder = "";
	var horsePower = "";
	for (var i = 1; i < precision; i++) {
		if (fraction[i] == undefined) {
			reminder += "0";
		} else {
			reminder += fraction[i];
		}
	}
	horsePower = realNumber + reminder;
	console.log(horsePower);
}

convertKWtoHP(150);
convertKWtoHP(250);
convertKWtoHP(600); 