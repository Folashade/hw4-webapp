
//Global datastore
var messages;

function addMessage(){
	var user = 0;
	var message = $("#message-input").val();

	add(user,message);
	messages.push({user:user, message:message, date: new Date()});

}

// Implement refreshDOM()
  function refreshDOM(){
    if (messages === undefined) return;
}

function get(){
	$.ajax({
		type: "get",
		url: "/messages",
		success: function (data){
			messages = data.messages;
			refreshDOM();
		}
	});
}

function add(user, message){
	$.ajax({
		type:"post",
		data: {"user": user, "message": message},
		url: "/messages",
		success: function (data){}
	});
}

function edit(id, user, message) {
    $.ajax({
      type: "put",
      data: {user: user, message: message},
      url: "/messages/" + id,
      success: function(data) {}
    });
  }

  function del(id) {
    $.ajax({
      type: "delete",
      url: "/messages/" + id,
      success: function(data) {}
    });
  }

  function delAll() {
    $.ajax({
      type: "delete",
      url: "/messages",
      success: function(data) { }
    });
  }

$(document).ready(function() {
	// ^^ this line necessary for all jQuery functioning 
	get();
});