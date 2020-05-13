$(document).ready(function(){
	$('.rp__slider-images').slick({
		infinite: true,
  		speed: 750,
  		slidesToShow: 2,
  		variableWidth: true,
 		autoplay: true,
  		autoplaySpeed: 5000,
  		pasueOnHover: true,
  		appendArrows:$('.rp__slider-content'),
	});
});