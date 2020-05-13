var $slider = $('.page__slider__images');

if ($slider.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement('div');
  sliderCounter.classList.add('slider__counter');
  
  var updateSliderCounter = function(slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(sliderCounter).text(currentSlide + '/' +slidesCount)
  };

  $slider.on('init', function(event, slick) {
    $slider.append(sliderCounter);
    updateSliderCounter(slick);
  });

  $slider.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });
}

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