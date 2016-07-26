
var $ = jQuery.noConflict();

var app = app || {};
!function(){
	"use strict";

	$('html').removeClass('no-js');

	app.initialize = {
		init: function() {
			app.login.init();
		}
	},
	app.login = {
		init: function() {

			// Validate form before submit
			$('#login form').submit(function(event) {
	
				//Email and password validation
      			if (!(app.validation.email($("#email").val()) && app.validation.password($("#id").val()))) {

		      	//Preventing default event clickthgrough if validation above not successful
	        	event.preventDefault();
	        	$(".email-error").css("display", "none");
    
       			//Email error message to appear if incorrect email address provided 
	         	if(!app.validation.email($("#email").val())){
	         		app.errorMsg.email();
	         	}

		        //Password error message to appear if incorrect password provided 
		        if(!app.validation.password($("#id").val())) {
		        	app.errorMsg.password();
		        };
				};
			});
		}
	},
	app.validation = {
		email: function(email) {
			// Regex, use this to validate the Email. It return true or false.
			var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		},
		password: function(id) {
			// Use this to validate the Password. Checks if value is empty. It return true or false.
			var elementVal = $.trim(id);
			if(elementVal.length > 0)
				return true;
		}
	},
	
	app.errorMsg = {
		email: function(id) {
			$(".email-error").fadeIn("slow");
		},

		password: function(id) {
			$(".password-error").fadeIn("slow");
		}
	}
	app.docOnReady = {
		init: function() {
			app.initialize.init();
		}
	};

	$(document).ready(app.docOnReady.init);

}(jQuery);