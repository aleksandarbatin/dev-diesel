(function($) {

	$(document).ready(function() {
		var $submenuLink = $('.subcategory-title');
		var $subcategoryContent = $('.mobile__categories__content')

		$submenuLink.on('click', function() {
			$subcategoryContent.toggleClass('hidden'); /* hide and show menu*/
		});
	});

})(jQuery);

$(".prevent-link").one("click", function(event) {
  event.preventDefault();
});