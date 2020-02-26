var i;

var movies = [
	{
		image:"Captain-America-1.jpg",
		name:"Captain America: The First Avenger"
	},
	{
		image:"Captain-America-2.jpg",
		name:"Captain America: The Winter Soldier"
	},
	{
		image:"Captain-America-3.jpg",
		name:"Captain America: Civil War"
	},
	{
		image:"Hobbit-1.jpg",
		name:"The Hobbit: An Unexpected Journey"
	},
	{
		image:"Hobbit-2.jpg",
		name:"The Hobbit: The Desolation of Smaug"
	},
	{
		image:"Hobbit-3.jpg",
		name:"The Hobbit: The Battle of the Five Armies"
	},
	{
		image:"John-Wick-1.jpg",
		name:"John Wick"
	},
	{
		image:"John-Wick-2.jpg",
		name:"John Wick: Chapter 2"
	},
	{
		image:"John-Wick-3.jpg",
		name:"John Wick: Chapter 3 - Parabellum"
	},
	{
		image:"Lord-of-the-rings-1.jpg",
		name:"The Lord of the Rings: The Fellowship of the Ring"
	},
	{
		image:"Lord-of-the-rings-2.jpg",
		name:"The Lord of the Rings: The Two Towers"
	},
	{
		image:"Lord-of-the-rings-3.jpg",
		name:"The Lord of the Rings: The Return of the King"
	},
];


var input = document.getElementById('ourSearch');
var filter = input.value.toUpperCase();

var list = document.getElementById('ourList');
var listItems = list.getElementsByTagName('li');

for(i = 0; i < listItems.length; i++) {
	var link = listItems[i].getElementsByTagName('a')[0];

	var image = link.getElementsByTagName('img')[0];
	image.setAttribute('src', 'img/' + movies[i].image);

	var naslov = link.getElementsByTagName('h4')[0];
	naslov.textContent = movies[i].name;
}


function findMovie() {
	 input = document.getElementById('ourSearch');
	 filter = input.value.toUpperCase();

	 list = document.getElementById('ourList');
	 listItems = list.getElementsByTagName('li');

for(i = 0; i < listItems.length; i++) {
	 link = listItems[i].getElementsByTagName('a')[0];

	 image = link.getElementsByTagName('img')[0];
	image.setAttribute('src', 'img/' + movies[i].image);

	 naslov = link.getElementsByTagName('h4')[0];
	naslov.textContent = movies[i].name;

	if(naslov.innerHTML.toUpperCase().indexOf(filter) > -1) {
			listItems[i].style.display = "";
		} else {
			listItems[i].style.display = "none";
		}
	}
}



