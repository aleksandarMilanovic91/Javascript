var i;

// Task1//

// function beOnline() {
// 	if (window.navigator.onLine === true) {
// 		alert("You are online");
// 	}
// }

// beOnline();

// Task2//

// function startReload() {
// 	window.location.reload();
// }

// startReload();


// Task4//

// var num = 0;

// function getNumber() {
// 	num++;

// 	console.log("Number is " + num)

// 	if (num >= 15) {
// 		clearInterval(stop)
// 	}
// }

// var stop = setInterval(getNumber, 1000);

// Task5//

// function randomNum() {
	
// 	console.log(Math.random() * 10)
// }

// randomNum();

// Task6//

var someArr = [
{
	name: "John",
	age: 25,
	status: "inactive"
},
{
	name: "Tom",
	age: 28,
	status: "inactive"
},
{
	name: "Henry",
	age: 32,
	status: "inactive"
},
{
	name: "Jennifer",
	age: 35,
	status: "inactive"
},
{
	name: "Ann",
	age: 21,
	status: "inactive"
}
];


var userName = prompt("What is your name?");

for (i = 0; i < someArr.length; i++) {
	if (userName !== someArr[i].name) {
		
		console.log("User with name " + userName + " doesn't exist.")

	} else if (userName === someArr[i].name) {
		
		someArr[i].status = "active";
		var otherArr = someArr.slice(i);
		window.localStorage.setItem("loggedInUser", otherArr);

		setTimeout(function() {
			window.localStorage.removeItem("loggedInUser");
			console.log("User is logged out")
		}, 60000);

	}


}





