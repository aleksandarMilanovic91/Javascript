// Task1//

var dataOld = [34, true, "Peter", 1992];
var dataNew = [];
var i;


for (i = 0; i < dataOld.length; i++) {
		dataNew[i] = dataOld[i];
};
console.log(dataNew)

// Task2//

var dataOld = [34, true, "Peter", 1992];
var dataNew = [];

for (i = dataOld.length - 1; i >= 0; i--) {
		dataNew[dataOld.length - 1 - i] = dataOld[i]
};
console.log(dataNew)

// Task3//

dataNew = [12, "Jack"];

for (i = 0; i < dataOld.length; i++) {
		dataNew[i + 2] = dataOld[i];
		
};

console.log(dataNew)

// Task4//

var a = [12, 56, 32, 44, 69];
var b = [88, 7, 13];

for (i = 0; i < b.length; i++) {
		a[i + 5] = b[i];
		
};

console.log(a)

// Task5//

var c = [12, 56, 32, 44];
var d = [88, 7, 13]
var j;

var e = [];

for (i = 0; i < c.length; i++) {
	for (j = 0; j < d.length; j++) {
		e[2*i] = c[i];
		e[2*j + 1] = d[j];
	}
}

console.log(e)

// Task6//

var pattern = "*";
var secondPattern = "";

for (i = 0; i < 6; i++) {
	secondPattern = secondPattern + pattern[0];
	console.log(secondPattern)
}


// Task7//

var line = "";
var star = "*";
var space = " ";

for (var i = 0; i < 6; i++) {
  for (var j = 0; j < 10; j++) {
    if (i === 0 || i === 5) {
      line += star;
    } else if (j === 0 || j === 9) {
      line += star;
    } else {
      line += space;
    }
  }
  console.log(line);
  line = "";
}



