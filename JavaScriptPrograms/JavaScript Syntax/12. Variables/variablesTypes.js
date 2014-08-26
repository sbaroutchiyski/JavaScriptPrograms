function variablesTypes(name, age, isMale, foods) {
	//The function return the values of the variables and their types.
	var personName = name;
	var personAge = age;
	var personGender = isMale;
	var favourFood = foods;
	console.log("My name: " + personName + " //type is " + typeof (personName));
	console.log("My age: " + personAge + " //type is " + typeof (personAge));
	console.log("I am male: " + personGender + " //type is " + typeof (personGender));
	console.log("My favourite foods are: " + favourFood + " //type is " + typeof (favourFood));
}

variablesTypes("Pesho", 22, true, ["fries", "bananas", "cake"]);
