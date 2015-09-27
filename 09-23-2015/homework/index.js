
$(.'readmore').on('click', function(event) {
	event.preventDefault();
	$('.hide').slidedown();
	$('.read_more').hide();
	$('.read_less').show();	
}

$(.'read_less').on('click', function(event) {
	event.preventDefault();
	$('.hide').slideUp();
	$('.read_more').show();
	$('.read_less').hide();	
}

$(."learn_more").on('click', function(event) {
	event.preventDefault();
	$('.hide_2').slidedown();
	$('.learn_more').hide();
	$('.read_less_2').show();	
}

$(.'learn_more').on('click', function(event) {
	event.preventDefault();
	$('.hide_2').slideUp();
	$('.learn_more').show();
	$('.read_less_2').hide();	
}