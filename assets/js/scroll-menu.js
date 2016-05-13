(function($) {
if ($(window).width() >= 768) {
	$(window).on('scroll', function () {	
		var $header = $('.header');
		var hH 	    = $header.outerHeight();

		if ($(this).scrollTop() > hH) {
			$header.addClass("navbar-top");
		} else {
			$header.removeClass("navbar-top");
		}
	});
}
else {
	$header.removeClass("navbar-top");
}
})(jQuery);