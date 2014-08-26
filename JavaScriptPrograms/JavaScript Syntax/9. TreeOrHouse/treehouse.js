function treeHouseCompare(a, b) {
	//The function compares the area of the house and the area
	// of the tree and returns the name of the figure with bigger area (house or tree) and the value of the area.
	var houseBase = a;
	var houseRoofHeight = a - 1;
	var houseArea = (Math.pow(houseBase, 2)) + (houseBase * 0.5 * houseRoofHeight);
	var treeHeight = b;
	var treeTrunkArea = treeHeight * (treeHeight / 3);
	var treeCrownRadius = treeHeight - 1;
	var treeArea = treeTrunkArea + (Math.PI * Math.pow(treeCrownRadius, 2));
	if (treeArea > houseArea) {
		console.log("tree/" + treeArea.toFixed(2));
	} else {
		console.log("house/" + houseArea.toFixed(2));
	}
}

treeHouseCompare(3, 2);
treeHouseCompare(3, 3);
treeHouseCompare(4, 5);
