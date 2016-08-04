$.fn.scrollBottom = function() { 
  return $(document).height() - this.scrollTop() - this.height(); 
};

$(function() {
	$('nav li a').click(function(e) {
		e.preventDefault(); // prevent the default action
		e.stopPropagation; // stop the click from bubbling
		$(this).closest('ul').find('.active').removeClass('active');
		$(this).parent().addClass('active');
	});

	$('a').bind('click',function(event){
		event.preventDefault();
		var $anchor = $(this);

		$('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top}, 1000,'easeInOutExpo');
	});


	jQuery(window).scroll(function() {
		var st = jQuery(document).scrollTop();

		var sb = jQuery(window).scrollBottom();

		console.log(st);
		//console.log(sb);

		if (st > 136) {

			$('.navFloat').fadeIn('fast');

			$('.navFloat li a').click(function(e) {
				e.preventDefault();
				$('.navFloat li a').removeClass('active');
				$(this).addClass('active');
			});
		}else{
			$('.navFloat').fadeOut('fast');
		};

		if (st < 151) {
			$('.navFloat li a').removeClass('active');
			$('.nav-1 a').addClass('active');
		};

		if (st >= 655) {
			$('.navFloat li a').removeClass('active');
			$('.nav-2 a').addClass('active');
		};

		if (st >= 2380) {
			$('.navFloat li a').removeClass('active');
			$('.nav-3 a').addClass('active');
		};

		if (sb === 0) {
			$('.navFloat li a').removeClass('active');
			$('.nav-4 a').addClass('active');
		};
	});

	
});