(function($){
	var welcome = {
		'config' : {
		
		},        
		'init' : function () {
			if ($(window).width() > 320) {
				$(".introduction__quote").hover(function() {
					$(".quote__popover").fadeIn();
				}, function() {
					$(".quote__popover").fadeOut();
				})
			}
		} 
	};
	$(document).ready( function() {
		welcome.init();
	});
}(jQuery));