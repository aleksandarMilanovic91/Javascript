var i;
var j;
// Task1//

function Student(name, lastName, age, averageGrade) {
	this.name = name;
	this.lastName = lastName;
	this.age = age;
	this.averageGrade = averageGrade;
}

var peter = new Student("Peter", "Smith", 27, 8);
var tom = new Student("Tom", "White", 23, 7);
var anne = new Student("Anne", "Hathaway", 25, 9);
var maria = new Student("Maria", "Jackson", 22, 8);

console.log(peter, tom, anne, maria)

// Task2//

function Player(name, age, goalsScored, yellowCards) {
	this.name = name;
	this.age = age;
	this.goalsScored = goalsScored;
	this.yellowCards = yellowCards;
}

var messi = new Player("Messi", 32, 19, 2);
var ronaldo = new Player("Ronaldo", 34, 26, 0);
var hazard = new Player("Hazard", 28, 6, 1);

console.log(messi, ronaldo, hazard)

// Task3//

function Players(position) {
	this.name = position[0];
	this.age = position[1];
	this.goalsScored = position[2];
	this.yellowCards = position[3];
}

var players = [["Messi", 32, 19, 2], ["Ronaldo", 34, 26, 0], ["Hazard", 28, 6, 1]];

for(i = 0; i < players.length; i++) {
	this[players[i][0].toLowerCase()] = new Players(players[i]);
}	

console.log(messi, ronaldo, hazard)


// Task4//

function Operation(firstNumber, secondNumber, oneMethod) {
	this.firstNumber = firstNumber;
	this.secondNumber = secondNumber;
	this.oneMethod = oneMethod;

	if(this.oneMethod === "multiplaying") {
		 this.oneMethod =  this.firstNumber * this.secondNumber;
	}
	else if(this.oneMethod === "dividing") {
		 this.oneMethod =  this.firstNumber / this.secondNumber;
	}
	else if(this.oneMethod === "adding") {
		 this.oneMethod =  this.firstNumber + this.secondNumber;
	}
	else if(this.oneMethod === "subtracting") {
		 this.oneMethod =  this.firstNumber - this.secondNumber;
	}

	

};

var multiplaying = new Operation(5, 6, "multiplaying");
var dividing = new Operation(10, 5, "dividing");
var adding = new Operation(8, 7, "adding");
var subtracting = new Operation(15, 11, "subtracting");

console.log(subtracting.oneMethod)

