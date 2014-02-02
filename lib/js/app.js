(function($){
	var welcome = {
		'config' : {
			'module' : $(""),
		},
                
		'init' : function () {
			var main = welcome.mainMethods();
			main.setup();
			
			var ko = welcome.knockout()
			ko.activate();
			
			if ($(window).width() > 320) {
				$(".introduction__quote").hover(function() {
					$(".quote__popover").fadeIn();
				}, function() {
					$(".quote__popover").fadeOut();
				})
			}
			
			
		},
		'knockout' : function () {
			function welcomeKO() {
				var self = this;
				
				function getRandom(min, max){
					return Math.floor((Math.random()*max)+min);
				}
				
				
				self.selectedBeyonce = ko.observable();
				
				
				self.beyonce = [
					{
						"bound" : -100,
						"fake" : "-128 (-0.94%)",
						"nickname" : "shit",
						"pic" : "/lib/img/shit.gif"
					},
					{
						"bound" : 0,
						"fake" : "25 (+0.01%)",
						"nickname" : "okay",
						"pic" : "/lib/img/okay.gif"
					},
					{
						"bound" : 100,
						"fake" : "253 (+0.85%)",
						"nickname" : "great",
						"pic" : "/lib/img/great.gif"
					}
					
				]
				
				var number = getRandom(self.beyonce[0].bound-10, self.beyonce[2].bound+100);
				
				self.currentMarket = ko.observable(number);
				
			}
			return {
				activate: function () {
					ko.applyBindings(new welcomeKO());
				}
			}
		},
		'mainMethods' : function () {
			function fittype() {
				$("#masthead").fitText(0.55);	
			}     
			
			function beyPopover() {
				//agh
			}
			
			          
			return {
				setup: function () {
				//	fittype();
				},
                                
			};
		}         
	};
	$(document).ready( function() {
		welcome.init();
	});
}(jQuery));