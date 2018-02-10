$(document).ready(function($){
	$(".slider").slick({
		dots: false,
		infinite: true,
		  speed: 1000,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		arrows: true,
		centerPadding: "50px",
		adaptiveHeight: true,
		centerMode: true,
		variableWidth: true,
		appendArrows: ".arrow",
		prevArrow: ".slick-prev",
		nextArrow: ".slick-next",
	});
})
