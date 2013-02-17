window.onload = function(){
	$(document).ready(function() {
	// ^^this line necessary for all jQuery functioning 

	// Debugging - console.logs run only when true
	debug = true;

	// Print function
	var print = function(input){
		if (debug === true){
			console.log(input);
		}
	}
	
	var chatroom = function(){
		var userlist = $('.user');
		print(userlist[0].id);
	}
	
	chatroom();
	});	
}