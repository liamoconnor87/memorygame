$(document).ready(function(){

	/* Burger Loading Screen */
	$(".load img").delay(500).animate({
		opacity: '1',
	}, 700)
	$(".load img").animate({
		opacity: '0',
	}, 500)
	$(".load img").animate({
		opacity: '1',
	}, 700)
	$(".load img").animate({
		opacity: '0',
	}, 500)
	$(".load img").animate({
		opacity: '1',
	}, 700)
	$(".load img").animate({
		opacity: '0',
    }, 500)
    
	$(".load").delay(4100).fadeOut(500);

	$(".title").delay(4600).animate({
		opacity: '1',
	}, 500)

	$(".game-container").delay(4800).animate({
		opacity: '1',
    }, 500)
})