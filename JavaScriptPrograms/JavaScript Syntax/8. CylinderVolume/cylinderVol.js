function calcCylinderVol(radius, height) {
	// Calculate cylinder volume.
	var area = 2 * Math.PI * radius * radius * height;
	var precision = 3;
	// three digits after decimal point
	var areaRealPart = parseInt(area, 10);
	var areaFractionPart = (area - areaRealPart) + "";
	var reminder = "";
	for (var i = 0; i < precision + 2; i++) {
		if (areaFractionPart[i] == undefined) {
			reminder += "0";
		} else {
			reminder += areaFractionPart[i];
		}
	}
	return areaRealPart + reminder;
}

console.log(calcCylinderVol(2, 4));
console.log(calcCylinderVol(5, 8));
console.log(calcCylinderVol(12, 3));

