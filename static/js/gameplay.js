mapcanvas = document.getElementById("map-canvas");
mapctx = mapcanvas.getContext("2d");

clearInterval(checkUsers);
var start = setInterval(startGameServer, 2000);
setInterval(getMessages, 2000);
setInterval(getUsers, 2000);
setInterval(getGameStats, 2000);
var turns; 
var done;
var cube;
var turn = false;
var inGame = false;
var randomnumber;

var numberArray = ["", "img/numbers/1.png", "img/numbers/2.png","img/numbers/3.png","img/numbers/4.png","img/numbers/5.png","img/numbers/6.png"];

function allPlayersTurn(){
	var allDone = true;

	for(var i =0; i < users.length; i++){
		console.log("MYTURN "+ users[i].turn);
		console.log(parseInt(gamestats,10)+1);
		if (users[i].turn != (parseInt(gamestats,10) +1 +"")){
			allDone = false;
		}
	}
	console.log("ALL DONEL:::" + allDone);
	if(allDone){
		clearInterval(done);

		alert("MINIGAME TIME");
		postGameStats('');
		setTimeout(function(){start = setInterval(startGameServer,2000);}, 4000);
		console.log("WOOOOOOOOOOOWOWOWOWOWOWOWOWOWOWOWOWOWOWOWOWOOWW");

	}
}

function turnOver(){
	if (turn == true && NUM_STEPS === 0){
		clearInterval(cube);
		turn = false;
		clearInterval(turns);
		var id;

    	for(var i =0; i < users.length; i++){
    		if(users[i].user == getParam('user')){
    			id = i;
    		}
    	}
    	updateUser(getParam('user'), id, (parseInt(users[id].turn,10)+1)+"", users[id].position, false, users[id].score );
	}
}
function startGameServer(){
	NUM_STEPS = -1;
	turn = true;
	//console.log("startGame");
	getUsers();

	if(users.length === 2){
		turns = setInterval(turnOver, 4000);
		done = setInterval(allPlayersTurn, 4000);
		inGame = true;
		//alert("Everyone has logged in let's play!!");
		clearInterval(start);
		//console.log("USER:"+ getParam('user') + "IS NOW PLAYING");
		//console.log("users are::: " + users);
		takeTurns();
		
	}
}

function takeTurns(){
	//console.log("IN TAKE TURNS");
	////console.log("currentTurn is:" + gamestats);
	for (var i =0; i < users.length; i++){
		//console.log("PARAM: " + getParam('user'));
		//console.log("USER: " + users[i].user);
		//console.log("TURN: " + users[i].turn);
		//console.log("GAMESTATS: " + gamestats);
		if(users[i].user == getParam('user') && users[i].turn == gamestats){
			//console.log("STARTING THE DIE");
		showDie();
		}
	}
}

function showDie(){
	//console.log("SHOW DIE");
	var random = setInterval(generateRandom, 50);
	cube = setInterval(drawCube,60);

	function drawCube(){
		var number = new Image();
		number.src = numberArray[randomnumber];

		number.onload = function (){
			//console.log("DRAWING IMAGE");
			ctx.drawImage(number, 20,20);
		}
	}
	function generateRandom(){
		//console.log("generateRandom!!!");
		randomnumber = Math.floor((Math.random()*6)+1);
		drawCube(randomnumber);
	}

	var onMouseDown = function(event){
		clearInterval(random);
    	alert("You move:" + randomnumber);
    	canvas.removeEventListener('click', onMouseDown,false);
    	NUM_STEPS = randomnumber;
    	
    	//console.log("***********************************************************************");
  
    }


	
    
	canvas.addEventListener('click', onMouseDown, false);
}



/*var canvasx =300;
var canvasy = 300;
var playerx;
var playery;*/

//gameboard.src = "gameboard.png";
/*gameboard.onload = function() {
	//ctx.drawImage(gameboard, canvasx, canvasy , 1000, 600, 0,0, 1000,600);
	drawPlayer(280,290);
}

var gamearray = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				 [0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0],
				 [0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0],
				 [0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0],
				 [0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0],
				 [0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0],
				 [0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0],
				 [0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0],
				 [0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0],
				 [0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0],
				 [0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0],
				 [0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0],
				 [0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0],
				 [0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0],
				 [0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0],
				 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]

//canvas.addEventListener('mousedown', onMouseDown, false);
canvas.addEventListener('keydown', onKeyPress, false);


function onKeyPress(event){
	//left
	//alert("RAWRRRR");
	if (event.keyCode === 37){
		//console.log("left!!");
		movePlayer('left');
	}
	//right
	else if(event.keyCode === 39){
		movePlayer('right');
	}
	//up
	else if(event.keyCode === 38){
		movePlayer('up');
	}
	//down
	else{
		movePlayer('down');
	}
}
*/

/*function movePlayer(direction){
	//console.log("moveplayer...");
	if (direction === 'left'){
		//console.log("redrawing at left...");
		canvasx = canvasx-70;
		ctx.drawImage(gameboard, canvasx, canvasy , 600, 500, 0,0, 600,500);
		drawPlayer();
	}
	else if(direction === 'right'){
		//console.log("redrawing at right...");
		canvasx = canvasx+70;
		ctx.drawImage(gameboard, canvasx, canvasy , 600, 500, 0,0, 600,500);
		drawPlayer();
	}
	else if (direction === 'up'){
		//console.log("redrawing at left...");
		canvasy = canvasy-70;
		ctx.drawImage(gameboard, canvasx, canvasy , 600, 500, 0,0, 600,500);
		drawPlayer();
	}
	else{
		//console.log("redrawing at left...");
		canvasy = canvasy+70;
		ctx.drawImage(gameboard, canvasx, canvasy , 600, 500, 0,0, 600,500);
		drawPlayer();
	}
}
function drawPlayer (){
	//console.log("drawing player...");
	ctx.fillStyle="#FF0000";
	ctx.fillRect(280, 290,50,50);
	playerx = canvasx+ (280+25);
	playery = canvasy + (290+25);
}*/


