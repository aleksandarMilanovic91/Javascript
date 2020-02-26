
var slike = ["slika1.jpg","slika2.jpg", "slika3.jpg", "slika4.jpg"];


// Creating image slider - image switching

var image = document.querySelector('body .image-container .image-slider');

var someImage = document.createElement('img');

var imageNumber = 0;

someImage.setAttribute('src', 'img/' + slike[imageNumber]);

image.appendChild(someImage);

var ourImage = document.querySelector('body .image-container .image-slider img');


// Creating thumbnails

var thumbnailContainer = document.querySelector('body .image-container .thumbnail-container');

var firstThumbnail = document.createElement('img');
var secondThumbnail = document.createElement('img');
var thirdThumbnail = document.createElement('img');
var fourthThumbnail = document.createElement('img');


firstThumbnail.setAttribute('src', 'img/' + slike[0]);
thumbnailContainer.appendChild(firstThumbnail);

secondThumbnail.setAttribute('src', 'img/' + slike[1]);
firstThumbnail.after(secondThumbnail);

thirdThumbnail.setAttribute('src', 'img/' + slike[2]);
secondThumbnail.after(thirdThumbnail);

fourthThumbnail.setAttribute('src', 'img/' + slike[3]);
thirdThumbnail.after(fourthThumbnail);


var activeThumbnail = document.querySelector('.image-container .thumbnail-container').getElementsByTagName('img');



function changeImage() {
	someImage.setAttribute('src', 'img/' + slike[imageNumber]);
	activeThumbnail[imageNumber].classList.add('active');
	if(imageNumber > 0) {
		activeThumbnail[imageNumber - 1].classList.remove('active');
	}
	else {activeThumbnail[activeThumbnail.length - 1].classList.remove('active');
	}
	imageNumber++;

	if (imageNumber > 3) {
		imageNumber = 0;
	}
}

changeImage();
setInterval(changeImage, 5000);


