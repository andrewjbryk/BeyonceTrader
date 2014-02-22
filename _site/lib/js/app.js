(function($){
	var welcome = {
		'config' : {

		},
		'init' : function () {
			$('#beyonceImage').hide();
			if ($(window).width() > 320) {
				$(".introduction__quote").hover(function() {
					$(".quote__popover").fadeIn();
				}, function() {
					$(".quote__popover").fadeOut();
				})
			}
			var pathArray = window.location.pathname.split( '/' );
			if(pathArray[pathArray.length - 1] == ""){
				$.getJSON("s/homepage.json", function(currentData){
					percentageChange = currentData["change"];
					percentageText = "loading";
					percentageImage = "loading";
					percentageInteger = parseInt(percentageChange);
					if(percentageInteger > 0 && percentageInteger <= 5){
						$('#beyonceStatus').text("okay");
						$('#beyonceImage').attr('src', 'lib/img/okay.gif');
						$('#beyonceImage').show();
					} else if(percentageInteger > 5){
						$('#beyonceStatus').text("good");
						$('#beyonceImage').attr('src', 'lib/img/great.gif');
						$('#beyonceImage').show();
					} else {
						$('#beyonceStatus').text("shit");
						$('#beyonceImage').attr('src', 'lib/img/shit.gif');
						$('#beyonceImage').show();
					}
					$('#beyonceValue').text(percentageChange);
				});
			} else {
				$.getJSON("api/" + pathArray[pathArray.length - 1] + ".json", function(currentData){
					percentageChange = currentData["change"];
					percentageText = "loading";
					percentageImage = "loading";
					percentageInteger = parseFloat(percentageChange);
					if(percentageInteger > 0 && percentageInteger <= 10){
						$('#beyonceStatus').text("okay");
						$('#beyonceImage').attr('src', 'lib/img/okay.gif');
						$('#beyonceImage').show();
						$('#stock_name').hide();
						$('#stock_name').text(pathArray[pathArray.length - 1].toUpperCase());
						$('#stock_name').show();
					} else if(percentageInteger > 10){
						$('#beyonceStatus').text("good");
						$('#beyonceImage').attr('src', 'lib/img/great.gif');
						$('#beyonceImage').show();
						$('#stock_name').hide();
						$('#stock_name').text(pathArray[pathArray.length - 1].toUpperCase());
						$('#stock_name').show();
					} else {
						$('#beyonceStatus').text("shit");
						$('#beyonceImage').attr('src', 'lib/img/shit.gif');
						$('#beyonceImage').show();
						$('#stock_name').hide();
						$('#stock_name').text(pathArray[pathArray.length - 1].toUpperCase());
						$('#stock_name').show();
					}
					$('#beyonceValue').text(percentageChange + "%");
				});
			}
		}
	};
	$(document).ready( function() {
		welcome.init();
	});
}(jQuery));
