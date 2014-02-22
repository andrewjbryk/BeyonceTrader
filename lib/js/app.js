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
					change = currentData["change"];
					price = currentData["price"];
					changeText = "loading";
					changeImage = "loading";
					changeInt = parseInt(change);
					
					percentChange = ((change / price) * 100).toFixed(2);
					
					if(changeInt > 0 && changeInt <= 5){
						//$('#beyonceStatus').text("okay");
						$('#beyonceValue #change').removeClass();
						$('#beyonceImage').attr('src', 'lib/img/okay.gif');
						$('#beyonceImage').show();
					} else if(changeInt > 5){
						//$('#beyonceStatus').text("good");
						$('#beyonceValue #change').removeClass().addClass("great");
						$('#beyonceImage').attr('src', 'lib/img/great.gif');
						$('#beyonceImage').show();
					} else {
						//$('#beyonceStatus').text("shit");
						$('#beyonceValue #change').removeClass().addClass("shit");
						$('#beyonceImage').attr('src', 'lib/img/shit.gif');
						$('#beyonceImage').show();
					}
					$('#beyonceValue #price').text(price);
					$('#beyonceValue #change').text(change + " (" + percentChange + "%)");
				});
			} else {
				$.getJSON("api/" + pathArray[pathArray.length - 1] + ".json", function(currentData){
					change = currentData["change"];
					price = currentData["price"];
					changeText = "loading";
					changeImage = "loading";
					changeInt = parseFloat(change);
					percentChange = ((change / price) * 100).toFixed(2);
					stockName = pathArray[pathArray.length - 1].toUpperCase();
					
					if(price === "0.00") {
						$('#beyonceImage').attr('src', 'lib/img/404.gif');
						$('#beyonceImage').show();
						
						$('#stock_name').text("Sorry, try again");
						$("#beyonceName").text("???");
						$('#beyonceValue').text("Error :(");
						return;
					}
					
					
					if(changeInt > 0 && changeInt <= 10){
						//$('#beyonceStatus').text("okay");
						$('#beyonceValue #change').removeClass();
						$('#beyonceImage').attr('src', 'lib/img/okay.gif');
						$('#beyonceImage').show();
						$("#beyonceName").text(stockName);
						$('#stock_name').hide();
						$('#stock_name').text(stockName);
						$('#stock_name').show();
					} else if(changeInt > 10){
						//$('#beyonceStatus').text("good");
						$('#beyonceValue #change').removeClass().addClass("great");
						$('#beyonceImage').attr('src', 'lib/img/great.gif');
						$('#beyonceImage').show();
						$("#beyonceName").text(stockName);
						$('#stock_name').hide();
						$('#stock_name').text(stockName);
						$('#stock_name').show();
					} else {
						//$('#beyonceStatus').text("shit");
						$('#beyonceValue #change').removeClass().addClass("shit");
						$('#beyonceImage').attr('src', 'lib/img/shit.gif');
						$('#beyonceImage').show();
						$("#beyonceName").text(stockName);
						$('#stock_name').hide();
						$('#stock_name').text(stockName);
						$('#stock_name').show();
					}
					$('#beyonceValue #price').text(price);
					$('#beyonceValue #change').text(change + " (" + percentChange + "%)");
				});
			}
		}
	};
	$(document).ready( function() {
		welcome.init();
	});
}(jQuery));
