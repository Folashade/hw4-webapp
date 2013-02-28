
//Global datastore
var messages;
var users;
var userarray;
var gamestats;

//users - local only (clears everytime sever is restarted)
//userarray 


//setinterval variable for disableUsers
var checkUsers= setInterval(disableUsers, 1000);
var initDisable= true;
var billDisabled=false;
var steveDisabled = false;
var sergeyDisabled  = false;
var markDisabled = false;


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

    kvp.join('?');

  }

  if(i<0) {kvp[kvp.length] = [key,value].join('=');}
  return kvp.join('?');
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


function newUser(user){
  var exists = false;

  for (var i =0; i < users.length; i++){
    if (users[i].user === user){
      exists = true;
    }
  }
  if (exists) {
    var query = insertParam("user", user);

    var url = window.location.href
    url = url.replace("index.html", "game.html")
    window.location.replace(url+ query);

    userarray[user] = ({score: 0});
  }
  else{
    //local
    users.push({"user": user, "turn":0, "position": {"row":9, "col": 7}, 
      "minigame": false, "score": {"bits": 0, "bytes": 0}, "id": users.length, "date": new Date()});
    userarray[user] = ({score: 0, turn: 0});

    //server
    addUser(user);  
  }
}

function message(){
  var user = getParam('user');

  var message = user + ": <br>" + $("#message-input").val();
  addMessage(message,user);
  messages.push({message:message, user: user, date: new Date()});
  $("#message-input").val("");

  refreshDOM();
}
//<input id="billButton" class = "button"  type="submit" value= "Bill Gates" />
function refreshIndex(){

  if (billDisabled){
     console.log("billDisabledinrefresh");
    var input = $("<input>")
    input.attr('id', 'billButton');
    input.attr('disabled','disabled');
    input.addClass('disabled');
    input.attr('type', 'submit');
    input.attr('value', 'Bill Gates');

    var form1 = $("#form1");
    form1.empty();
    form1.append(input);
  }
  if(steveDisabled){
     console.log("steveDisabledinrefresh");
    var input = $("<input>")
    input.attr('id', 'steveButton');
    input.attr('disabled','disabled');
    input.addClass('disabled');
    input.attr('type', 'submit');
    input.attr('value', 'Steve Jobs');
    
    var form2 = $("#form2");
    form2.empty();
    form2.append(input);
  }

  if(sergeyDisabled){
    console.log("sergeyDisabledinrefresh");
    var input = $("<input>")
    input.attr('id', 'sergeyButton');
    input.attr('disabled','disabled');
    input.addClass('disabled');
    input.attr('type', 'submit');
    input.attr('value', 'Sergey Brin');

    var form3 = $("#form3");
    form3.empty();
    form3.append(input);
  } 
  if (markDisabled){ 
     console.log("markDisabledinrefresh");
    var input = $("<input>")
    input.attr('id', 'markButton');
    input.attr('disabled','disabled');
    input.addClass('disabled');
    input.attr('type', 'submit');
    input.attr('value', 'Mark Zuckerberg');

    var form4 = $("#form4");
    form4.empty();
    form4.append(input);
  }
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

function getGameStats(){
  $.ajax({
    type: "get",
    url: "/gamestats",
    success: function (data){
      gamestats = data.gamestats;
    }
  });
}

function getMessages(){
  console.log('Get Messages');
  $.ajax({
    type: "get",
    url: "/messages",
    success: function (data){
     messages = data.messages;
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

/*function getUser(user){
  $.ajax({
    type: "get",
    url: "data/"+user,
    success: function (data){}
  });
}*/

function getUsers(){
  console.log("getUsers");
  $.ajax({
    type: "get",
    url: "/users",
    success: function (data){
      users = data.users;
      if (initDisable === true){
        disableUsers();
      }
      initDisable = false;
      refreshDOM();
    }
  });
}

function updateUser(user, id, turn, position, minigame, score){
  $.ajax({
    type: "put",
    data: {"user": user, "turn": turn, "position": position, 
    "minigame": minigame, "score": score, "id": id},
     url: "/users/" + id,
     success: function(data) {
      users = data.users;
      console.log("UPDATED"+ data[0]);
     }
  });
}

function addUser(user){
  $.ajax({
    type: "post",
    data:{"user": user, "turn":0, "position": {"row":9, "col": 7}, 
    "minigame": false, "score": {"bits": 0, "bytes": 0}, "id": users.length},
    url:"/users",
    success: function (data){
      var query = insertParam("user", user);
      var url = window.location.href
      url = url.replace("index.html", "game.html")
      window.location.replace(url+ query);
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

function postGameStats(time){
  if (time === 'init'){
    gamestats = 0;
  }
  else{
    //getGameStats();
    gamestats = (parseInt(gamestats,10)+1)+"";
  }
  $.ajax({
    type: "post",
    data:{"gamestats": gamestats},
    url: "/gamestats",
    success: function(data){
      console.log(gamestats);
    }
  });
}

function disableUsers (){
  console.log("disableUsers");
  if(users !== undefined){

    for (var i =0; i < users.length; i++){
     
      var x = users[i].user;

      if (x === 'Bill'){
        console.log("BILL");
        billDisabled = true;
      }
      else if(x==='Steve'){
        console.log("STEVE");
        steveDisabled = true;

      }
      else if(x ==='Sergey'){
        console.log("SERGEY");
        sergeyDisabled=true;
      }
      else if (x === 'Mark'){
        console.log("MARK");
        markDisabled = true;
      }
    }
    getUsers();
    refreshIndex();
  }
}

$(document).ready(function() {
	getMessages();
  getUsers();
  getUserArray();
  postGameStats('init');
  refreshDOM();

	/**** Game Navigation ****/
  	$("#nav").click(function() {
	  console.log ("clicked the nav");
	  alert("Handler for .click() called.");
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
		// getStats();
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
	
	/**** Game Stats Page ****/
	function getStats(){
		console.log('getting stats....');
		var userlist = users;
		console.log(userlist[0].user)
		$("#stats-content").html(userlist[0].user);	
		var sc = getParam(userlist[0].user);
		var curr = "" + userlist[0].user;
		console.log(userarray);
		console.log(users);
	}
	//add check for no users :) 


});
