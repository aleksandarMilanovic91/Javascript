

var breed = "beagle";

document.addEventListener('change', function() {
	breed = event.target.value;
});


var req = new XMLHttpRequest();

function toSendRequest() {
	req.open('GET', 'https://dog.ceo/api/breed/' + breed + '/images/random');
	req.send();
}

var img = document.querySelector('img');
	
function display(needUrl) {
	img.setAttribute('src', needUrl);
}

req.onload = function(event) {
	if (req.status === 200) {
		var dogUrl = (JSON.parse(req.responseText)).message;
		display(dogUrl);
	}
}

setInterval(toSendRequest, 5000);





