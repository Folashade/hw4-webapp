window.onload = function(){
	$(document).ready(function() {
	// ^^ this line necessary for all jQuery functioning 

	// Debugging - console.logs run only when true
	debug = true;

	// Print function
	var print = function(input){
		if (debug === true){
			console.log(input);
		}
	}
	
	var chatroom = function(){
		// USERS is a global in `data/users.js`
		var chatlog = $('.user');
		for (var i=0; i<chatlog.length; i++){
			var thisUser = chatlog[i];
			// "thisUser" is the user of the message that is currently
			// being accessed in the for loop
			$(thisUser).html("" + USERS[thisUser.id] + ":  ");
		}
		
	}
	
	chatroom();
	});	
}