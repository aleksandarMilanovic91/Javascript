//Task1//

var a,
	b,
	c,
	d,
	e;

a = 15;
b = -2;
c = 22;
d = 0;
e = 13;

if (a > b && a > c && a > d && a > e) {
		console.log("The largest number is " + a)
}	else if (b > a && b > c && b > d && b > e) {
		console.log("The largest number is " + b)
}	else if (c > a && c > b && c > d && c > e) {
		console.log("The largest number is " + c)
}	else if (d > a && d > b && d > c && d > e) {
		console.log("The largest number is " + d)
}	else if (e > a && e > b && e > c && e > d) {
		console.log("The largest number is " + e)
}


//Task2//

var x,
	y,
	z,
	p;

x = 3;
y = -7;
z = 2;
p = x * y * z;

if (p > 0) {
	console.log("The number is positive")
}	else if (p < 0) {
		console.log("The number is negative")
}	else {
	console.log("The number is zero")
}


//Task3//

var message = "Hello World";

switch (message) {
	case "Hello World":
		console.log("Hello World!");
		break;
	case "Bonjour le monde":
		console.log("Bonjour le monde!");
		break;
	case "Ciao mondo":
		console.log("Ciao mondo!");
		break;
	case "Hola Mundo":
		console.log("Hola Mundo!");
		break;
	default:
		console.log("Zdravo Svete!");				
}

//Task4//

var userAge = 18;

userAge > 28 ? console.log(userAge = 28) : console.log(userAge = 18)

if (userAge < 28) {
	console.log("User is less then 28 years old")
} else if (userAge > 28) {
	console.log("User is older then 28")
} else {
	console.log("User is 28")
}













