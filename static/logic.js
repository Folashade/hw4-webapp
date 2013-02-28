
//Global datastore
var messages;
var users;
var userarray;


var pullMessages = setInterval(getMessages, 2000);

function hash(k) {
  return userarray[k];
}


function insertParam(key, value)
{
  key = escape(key); value = escape(value);

  var kvp = document.location.search.substr(1).split('#');

  var i=kvp.length; var x; while(i--) 
  {
    x = kvp[i].split('=');

    if (x[0]==key)
    {
      x[1] = value;
      kvp[i] = x.join('=');
      break;
    }
  }

  if(i<0) {kvp[kvp.length] = [key,value].join('=');}

  return kvp.join('#');
}

function getParam( name ){
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");  
  var regexS = "[\\?#]"+name+"=([^&#]*)";  
  var regex = new RegExp( regexS );  
  var results = regex.exec( window.location.href); 
  if( results == null )    return "";  
  else    
    return results[1];
}

function newUser(){
  console.log(messages);
  console.log(users);
  console.log(userarray);

  var exists = false;
  var i;

  user = $("#user-input").val();

  console.log(user);

  for (i =0; i < users.length; i++){
    if (users[i].user === user){
      exists = true;
    }
  }
  if (exists) {
    console.log("already exists!!");
    var query = insertParam("user", user);

    window.location.replace("http://localhost:8889/game.html"+ query);
  }
  else{
    console.log("doesnt exist...");
    users.push({user: user, date: new Date()});
    userarray[user] = ({score: 0});

    addUser(user);
    
  }

}

function message(){
  var user = getParam('user');
  console.log(user);
  var message = user + ": <br>" + $("#message-input").val();
  addMessage(message,user);
	messages.push({message:message, user: user, date: new Date()});
  $("#message-input").val("");
  refreshDOM();

}

// Implement refreshDOM()
function refreshDOM(){
  if (messages === undefined) return;
  var container = $("#chatroom");
  container.empty();
  $("#message-input").empty();

  for (var i = 0; i < messages.length; i++){
    var message = messages[i].message;
    var li = $("<li>");
    li.addClass("bubble");
    var user = messages[i].user;

    if (user === (getParam('user'))){
      li.addClass("myself");
    }
    else{
      li.addClass("others");
    }
    var post = li.html(message);
    li.append(post);
    container.append(li);
  }
  if (window.location.href.indexOf("game") !== -1){
    container.scrollTop($("#chatroom")[0].scrollHeight);
  }
}

function getMessages(){
	$.ajax({
		type: "get",
		url: "/messages",
		success: function (data){
			messages = data.messages;
      // console.log(messages);
      refreshDOM();
		}
	});
}

function getUserArray(){
  $.ajax({
    type: "get",
    url:"/userarray",
    success: function (data){
      userarray = data.userarray;
      refreshDOM();
    }
  });
}

function getUsers(){
  $.ajax({
    type: "get",
    url: "/users",
    success: function (data){
      users = data.users;
      refreshDOM();
    }
  });
}

function addUser(user){
  console.log("ADDUSER!");
  $.ajax({
    type: "post",
    data:{"user": user},
    url:"/users",
    success: function (data){
      var query = insertParam("user", user);
      window.location.replace("http://localhost:8889/game.html"+ query);
    }
  });
}

function addMessage(message, user){
	$.ajax({
		type:"post",
		data: {"message": message,
          "user": user},
		url: "/messages",
		success: function (data){}
	});
}

function edit(id, message) {
  $.ajax({
    type: "put",
    data: {message: message},
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
	getMessages();
  getUsers();
  getUserArray();
  game = false;
  refreshDOM();

	$("#nav").click(function() {
	  console.log ("clicked the nav");
	  // alert("Handler for .click() called.");
		$('GameBoard').id = "MiniGame1Canvas";
		// $('mini-overlay').load('minigame1.html');
	});
	
	$("#game").click(function() {
		//back to game - hide all overlays
	  	$("#stats-overlay").fadeOut();
		$("#help-overlay").fadeOut();
		$("#about-overlay").fadeOut();
	});
	
	$("#stats").click(function() {
		console.log("----stats");
		//hide other content
		$("#help-content").hide();
		$("#about-content").hide();
		//fade in content we want
		$("#stats-overlay").fadeToggle();
		$("#stats-content").fadeIn();
		
		//hide the back ones
		setTimeout(function() {
			$("#help-overlay").fadeOut();
			$("#about-overlay").fadeOut();
		},300);

	});
	
	$("#help").click(function() {
		//hide other content
		$("#stats-content").hide();
		$("#about-content").hide();
		//fade in content we want
		$("#help-overlay").fadeToggle();
		$("#help-content").fadeIn();
		//hide the back ones
		setTimeout(function() {
		  	$("#stats-overlay").fadeOut();
			$("#about-overlay").fadeOut();
		},300);

	});
	
	$("#about").click(function() {
		//hide other content
		$("#help-content").hide();
		$("#stats-content").hide();
		//fade in content we want
		$("#about-overlay").fadeToggle();
		$("#about-content").fadeIn();
		
		//hide the back ones
		setTimeout(function() {
		  	$("#stats-overlay").fadeOut();
			$("#help-overlay").fadeOut();
		},300);
	});
	
	$("#mini1").click(function() {
		alert("switched Canvasess");
		// $('GameBoard').id = "MiniGame1Canvas";
		// $('mini-overlay').load('minigame1.html');
	});
	

});
