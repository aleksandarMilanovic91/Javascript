// Task1//
var i;
var j;

function someArr(numbers) {
	var ourArr = [];
	for (i = 0; i < numbers.length; i++) {
		ourArr[i] = numbers[numbers.length - 1 - i];
		}
	console.log(ourArr)	
	
}

someArr([1, 2, 3, 4]);

// Task2//

function getSomeType(type) {
	var anyType = type;

	if (type === "string") {
			
	} else if (type === "number") {
		
	} else if (type === true && type === false) {
		
	} else if (type === null) {
		
	} else if (type === NaN) {
		
	}

	return anyType;

}

function someParametar(type) {
	var someType = getSomeType(type);

	console.log(typeof someType)
	
}

someParametar("John");

// Task3//

function namesArr(names) {
var longest = 0;


	for(i = 0; i < names.length; i++) {
		if (longest <  names[i].length) {
			longest = names[i].length;
			
		}
		
	}
	console.log(longest)
}



namesArr(["Tom", "Marko", "Steven", "Vladimir", "Konstantin"]);

// Task4//



function someNumbers(brojevi) {
	var greatest = 0;
	var secondGreatest;
	var lowest = brojevi[brojevi.length - 1];
	var secondLowest;

	for (i = 0; i < brojevi.length; i++) {
		if (brojevi[i] > greatest) {
			secondGreatest = greatest;
			greatest = brojevi[i];
		} else if (brojevi[i] > secondGreatest && brojevi[i] != greatest) {
			secondGreatest = brojevi[i];
		}
	}

	for (i = 0; i < brojevi.length; i++) {
		if (brojevi[i] < lowest) {
			secondLowest = lowest;
			lowest = brojevi[i];
		} else if (brojevi[i] < secondLowest && brojevi[i] != lowest) {
			secondLowest = brojevi[i];
		}
	}
console.log(secondGreatest,secondLowest)

}
someNumbers([3, 8, 21, 17, 12]);

// Task5//

function getDrugiNiz(niz, jedanBroj) {
	noviNiz = [];

	for(i = 0; i < niz.length; i++) {
		
			if (niz[i] > jedanBroj) {
			noviNiz[i] = niz[i];
			}
		}
	
	return noviNiz;
}

function rezultat(niz, jedanBroj) {
	var drugiNiz = getDrugiNiz(niz, jedanBroj);
	console.log(drugiNiz)
}

rezultat([2, 6, 7, 11, 16, 21, 25], 8);