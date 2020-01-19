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