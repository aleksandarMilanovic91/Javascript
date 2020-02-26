


var teamData = {
	teamName: "Manchester United",
	teamLogo: "<img src='img/man-und-logo.png'>",
	playersProperty: 
	[
	{
		image: "DeGea.jpg",
		name: "David",
		lastName: "DeGea",
		number: 1,
		position: "Goalkeeper",
		age: 29
	},
	{
		image: "Lindelof.jpg",
		name: "Victor",
		lastName: "Lindelof",
		number: 2,
		position: "Defender",
		age: 25
	},
	{
		image: "Maguire.jpg",
		name: "Harry",
		lastName: "Maguire",
		number: 5,
		position: "Defender",
		age: 26
	},
	{
		image: "Shaw.jpg",
		name: "Luke",
		lastName: "Shaw",
		number: 23,
		position: "Defender",
		age: 24
	},
	{
		image: "Wan-Bissaka.jpg",
		name: "Aaron",
		lastName: "Wan-Bissaka",
		number: 29,
		position: "Defender",
		age: 22
	},
	{
		image: "Matic.jpg",
		name: "Nemanja",
		lastName: "Matic",
		number: 31,
		position: "Midfielder",
		age: 31
	},
	{
		image: "Pogba.jpg",
		name: "Paul",
		lastName: "Pogba",
		number: 6,
		position: "Midfielder",
		age: 26 
	},
	{
		image: "Mata.jpg",
		name: "Juan",
		lastName: "Mata",
		number: 8,
		position: "Midfielder",
		age: 31
	},
	{
		image: "James.jpg",
		name: "Daniel",
		lastName: "James",
		number: 21,
		position: "Midfielder",
		age: 22
	},
	{
		image: "Martial.jpg",
		name: "Anthony",
		lastName: "Martial",
		number: 9,
		position: "Forward",
		age: 24
	},
	{
		image: "Rashford.jpg",
		name: "Marcus",
		lastName: "Rashford",
		number: 10,
		position: "Forward",
		age: 22
	},
	{
		image: "Romero.jpg",
		name: "Sergio",
		lastName: "Romero",
		number: 22,
		position: "Goalkeeper",
		age: 32
	},
	{
		image: "Bailly.jpg",
		name: "Eric",
		lastName: "Bailly",
		number: 3,
		position: "Defender",
		age: 25
	},
	{
		image: "Dalot.jpg",
		name: "Diogo",
		lastName: "Dalot",
		number: 20,
		position: "Defender",
		age: 20
	},
	{
		image: "Fosu-Mensah.jpg",
		name: "Tim",
		lastName: "Fosu-Mensah",
		number: 24,
		position: "Defender",
		age: 22
	}
	]};


document.querySelector("body header a").innerHTML = teamData.teamLogo;
document.querySelector("body h1").textContent = teamData.teamName;

function getRandomNumber(arr) {
	return Math.floor(Math.random() * arr.length);
}

function addPlayers() {
	while(teamData.playersProperty.length) {
		console.log(teamData.playersProperty)

		var firstTeam = document.querySelector('.starting-team');
		var reserves = document.querySelector('.reserves');
		var randomNum = getRandomNumber(teamData.playersProperty);
		var container = teamData.playersProperty.length > 4 ? firstTeam : reserves;

		container.appendChild(createPlayer(teamData.playersProperty[randomNum]));

		teamData.playersProperty.splice(randomNum,1);
	}
}

function createPlayer(playerData) {
	var player = document.createElement('div');
	player.classList.add('player');

	var img = '<img src="img/' + playerData.image + '">';
	var name = '<div>' + playerData.name + " " + playerData.lastName + '</div>';
	var num = '<div>Number: ' + playerData.number + '</div>';
	var position = '<div>Position: ' + playerData.position + '</div>';
	var age = '<div>Age: ' + playerData.age + '</div>';

	player.innerHTML = img + name + num + position + age;

	return player;
}


function getSubstitution() {
	var firstTeam = document.querySelectorAll('.starting-team .player');
	var reserves = document.querySelectorAll('.reserves .player');

	var firstTeamNumber = getRandomNumber(firstTeam);
	var reservesNumber = getRandomNumber(reserves);

	var firstTeamPlayer = firstTeam[firstTeamNumber];
	var reservesPlayer = reserves[reservesNumber];

	var subPrevious = reservesPlayer.previousSibling;
	var subNext = reservesPlayer.nextSibling;

	firstTeamPlayer.after(reservesPlayer);
	subPrevious ? subPrevious.after(firstTeamPlayer) : subNext.before(firstTeamPlayer);


	console.log(firstTeamPlayer, reservesPlayer)


}


addPlayers();
setInterval(getSubstitution, 60000);