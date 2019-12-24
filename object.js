// Task1//
var i;
var person = {
	name: "Mike",
	age: 28,
	married: true
};

function somePerson(person) {
	person.age = 34;
	delete person.married;

}

somePerson(person);

console.log(person)

// Task2//

person = {
	name: "Jack",
	age: 32,
	married: true
};

function getChildren(person) {
	if(person.children === undefined) {
		person.children = [
			{
				name: "Tom",
				age: 7,
				gender: "male"
			},
			{
				name: "Mary",
				age: 6,
				gender: "female"
			}
		];
	}

}

getChildren(person);

console.log(person)

// Task3//


var students = [
	{
		name: 'Mike',
		age: 28,
		passed: false
	},
	{
		name: 'Ana',
		age: 23,
		passed: true
	},
	{
		name: 'Jack',
		age: 32,
		passed: true
	}
];

function getExam(students) {
	for (i = 0; i < students.length; i++) {
		if (students[i].passed === true) {
			console.log(students[i].name + " passed exam.")
		} else if(students[i].passed === false) {
			console.log(students[i].name + " did't pass exam")
		}
	}
}

getExam(students);

// Task4//

function someArr(students) {
	var names = [];
	var ages = [];
	var pass = [];

	for (i = 0; i < students.length; i++) {
		names[i] = students[i].name;
		ages[i] = students[i].age;
		pass[i] = students[i].passed;
	}

	console.log(names, ages, pass)

}

someArr(students);

// Task5//

person = {
	name:"Jack",
	age: 32,
	married: true
};

var otherPerson = Object.create(person);
console.log(otherPerson.age)

// Task6//

person = {
	name: "Mike",
	age: 28,
	married: true,
	someMtd: function() {
		return this.name + " " + this.age;
	}
};

console.log(person.someMtd())

// Task7//

person = {
	data: function(name, age, status) {
		this.name = name;
		this.age = age;
		this.status = status;
	}
};

person.data("Mike", 28, "married"); 

console.log(person)

