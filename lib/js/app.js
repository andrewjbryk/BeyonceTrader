(function($){
	var welcome = {
		'config' : {
			'module' : $(""),
		},
                
		'init' : function () {
			var main = welcome.mainMethods();
			main.setup();
		},
		'knockout' : function () {
			function welcomeKO() {
				var self = this;
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
			          
			return {
				setup: function () {
					fittype();
				},
                                
			};
		}         
	};
	$(document).ready( function() {
		welcome.init();
	});
}(jQuery));