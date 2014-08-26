function calcSupply(age, maxAge, food) {
	//The function calculates how many of the food you will eat for the rest of your life.
	this.currentAge = age;
	this.maximalAge = maxAge;
	this.amountOfFood = food;
	this.quantity = (this.maximalAge - this.currentAge) * (this.amountOfFood * 365);
}

var chocolate = new calcSupply(38, 118, 0.5);
var fruits = new calcSupply(20, 87, 2);
var nuts = new calcSupply(16, 102, 1.1);
console.log(parseInt(chocolate.quantity, 10) + "kg of chocolate would be enough until I am " + chocolate.maximalAge + " years old.");
console.log(parseInt(fruits.quantity, 10) + "kg of fruits would be enough until I am " + fruits.maximalAge + " years old.");
console.log(parseInt(nuts.quantity, 10) + "kg of nuts would be enough until I am " + nuts.maximalAge + " years old.");
