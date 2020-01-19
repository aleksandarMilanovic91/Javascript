var i;

// Task1//

var someString = "Lorem ipsum dolor sit amet"

function lowerCase() {
	console.log(someString.toLowerCase())
}

lowerCase();

// Task2//

function checkSomeString() {
	if (someString.indexOf("sit") > -1) {
		console.log("There is a word sit in string.")
	} else {
		console.log("There isn't a word sit in string.")
	}
}

checkSomeString();

// Task3//

function findLastIndex() {
	console.log("Last index is " + (someString.length - 1))
}

findLastIndex();

// Task4//

function somePosition() {
	var newString = someString.split(" ", 3);
	console.log(newString)
}

somePosition();

// Task5//

var otherString = "Piter is an actor"

function someLetter() {
	var secondString = otherString.split(" ");
	
	for(i = 0; i < secondString.length; i++) {
		secondString[0] = "Pitor";
		secondString[3] = "acter";
	}
	console.log(secondString.join(" "))
}


someLetter();

// Task6//

var someData = [34, 23, 14, 56, 23, 44, 65];

function anyData() {
	var result = someData.filter(function(item) {
		return item !== 56;
	});
	console.log(result)
}

anyData();

// Task7//

 function differentArray() {
 	var otherArray = someData.slice(1,4);
 	var secondArray = someData.slice(4,7);
 	var finalArray = otherArray.concat(secondArray.reverse());
 	console.log(finalArray)
 }

differentArray();

// Task8//

var moreData = [334, 233, 212, 199, 154, 122];

function getResult(){

var getNumber = moreData.map(function(number){
    return number - moreData[moreData.indexOf(number)-1];
});
 console.log(getNumber);
};

getResult();  



// Task9//

var students = [
  {
     name: "Jim",
     avgGrade: 8.5556
  },
  {
     name: "Mike",
     avgGrade: 8.5492
  },
  {
     name: "Anna",
     avgGrade: 8.9322
  },
  {
     name: "Jack",
     avgGrade: 8.6111
  }
];

 function averageGrade() {
 	for (i = 0; i < students.length; i++) {
 		if (students[i].avgGrade >= 8.6) {
 			students[i].avgGrade = students[i].avgGrade.toFixed(2);
 			console.log(students[i])
 		}
 	}
 }

averageGrade();





 
  