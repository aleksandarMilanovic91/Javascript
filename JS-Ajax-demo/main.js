var searchButton = document.querySelector('.search button');
var videoList = document.querySelector('.video-list');
var videoPreview = document.querySelector('.video-preview')
var key = 'AIzaSyArNjehByncGdWZFkl1yaMZ9Y7cF2wTDMw';

function onSearch() {
	var searchField = document.querySelector('.search input');

	searchField.value.trim() && getVideos(searchField.value);
	searchField.value = '';
}

function getVideos(searchValue) {
	var req = new XMLHttpRequest();

	req.open('GET', 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=' + searchValue + '&key=' + key);

	req.onload = function() {
		listVideos(JSON.parse(req.responseText).items);
	}

	req.send();
}

function listVideos(videos) {
	videoList.innerHTML = '';	
	videos.forEach(function(video) {
		addVideo(video);
	})
}

function addVideo(videoData) {
	var videoElement = document.createElement('div');

	var img = '<img src="' + videoData.snippet.thumbnails.medium.url+ '" />';
	var title = '<h3>' + videoData.snippet.title + '</h3>';
	var desc = '<div class="description">' + videoData.snippet.description + '</div>';

	videoElement.innerHTML = img + '<section>' + title + desc + '</section>';

	videoList.appendChild(videoElement);

	videoElement.querySelectorAll('h3, img').forEach(function(element) {
		element.addEventListener('click', function() {
			openVideo(videoData.id.videoId);
			relatedVideos(videoData.id.videoId);
		})	
	});
}

function relatedVideos(relatedVideoId) {
	videoList.classList.add('related');

	var secondReq = new XMLHttpRequest();

	secondReq.open('GET', 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&relatedToVideoId=' + relatedVideoId + '&key=' + key);

	secondReq.onload = function() {
		listVideos(JSON.parse(secondReq.responseText).items);
	}

	secondReq.send();
}

function openVideo(id) {
	videoPreview.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + id + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

































// Init

searchButton.addEventListener("click", onSearch);