$(function(){

	var slideWidth = $('.slide').width(),
		slideCount = $('.slide').size(),
		pos = 0;

	// set the width of the slide tray
	$('#slide_tray').width(slideWidth * slideCount);

	//hide arrows
	$('#next, #prev').hide();

	$('#frame').hover(function(){
		$('#next, #prev').show();
	}, function() {
		$('#next, #prev').hide();
	});

	$('#next').click(function(){
		if (pos < slideCount - 1) {
			pos += 1;
		} else {
			pos = 0; 
		}			
		var slideAmount = slideWidth * pos;
		$('#slide_tray').animate({right: slideAmount}, 600);
	});

	$('#prev').click(function(){
		if (pos > 0) {
			pos -= 1;
		} else {
			pos = slideCount - 1;
		}
		
		var slideAmount = slideWidth * pos;
		$('#slide_tray').animate({right: slideAmount}, 600);
	});
	
});

