var video = document.querySelector('.video');
var info = document.querySelector('.page__information');
var pv = document.querySelector('.page__video');

function togglePlayPause() {
	if(video.paused) {
		video.style.width = '1280px';
		video.style.height = '720px';
		pv.style.width = '1280px';
		pv.style.height = '720px';
		video.setAttribute('controls','')
		info.style.right = '0';
		pv.style.bottom = '15px';
		pv.style.right = '320px';
	} else {
		video.style.width = '355px';
		video.style.height = '200px';
		pv.style.width = '355px';
		pv.style.height = '200px';
		info.style.right = '310px';
		pv.style.bottom = '145px';
		pv.style.right = '725px';
	}
}

video.onclick = function() {
	togglePlayPause();
};

$(document).ready(function(){
	$('.page__slider__images').slick({
		infinite: true,
  		speed: 750,
  		slidesToShow: 2,
  		variableWidth: true,
 		autoplay: true,
  		autoplaySpeed: 5000,
  		pasueOnHover: true,
	});
});