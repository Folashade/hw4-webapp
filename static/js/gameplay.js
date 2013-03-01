/*15-237 Project 4
 * Samaan Ghani (sghani), Folashade Okunubi (foo),  Lydia Utkin(lju)
 * Due: 26 February 2013 
 
 Based off of Mario Party series.
*/
//gameplay.js

mapcanvas = document.getElementById("map-canvas");
mapctx = mapcanvas.getContext("2d");

clearInterval(checkUsers);
var start = setInterval(startGameServer, 2000);
setInterval(getMessages, 2000);
setInterval(getUsers, 2000);
setInterval(displayAllPlayers,2000);
setInterval(endGame, 2000);
setInterval(displayScores,2000);

var turns; 
var done;
var cube;
var intervalID;
var intervalIDGame;
var minigamedone;
var turn = false;
var inGame = true;
var randomnumber;

var minimap = new Image();   // Create new img element
minimap.src = 'images/fullMap.png'; // Set source path

var numberArray = ["", "img/numbers/1.png", "img/numbers/2.png","img/numbers/3.png","img/numbers/4.png","img/numbers/5.png","img/numbers/6.png"];


function displayScores(){
	for(var i =0; i < users.length; i++){
		if(users[i].user == 'Bill'){
			$("#billscore").html("Bits: " + users[i].score.bits + "<br>"
				+ "Bytes: " + users[i].score.bytes);
		}
		if(users[i].user == 'Steve'){
			$("#stevescore").html("Bits: " + users[i].score.bits + "<br>"
				+ "Bytes: " + users[i].score.bytes);
		}
	}
}

function endGame(){
	if (!inGame){
		ctx.fillStyle = "#000000";
		ctx.font = "54px sans-serif";
		clearInterval(intervalID);
		clearInterval(intervalIDGame);
		setInterval(function(){clearInterval(cube);},50);
		ctx.fillText(" GAME OVER", 400, 300);

	}
}

function displayAllPlayers(){

	mapctx.drawImage(minimap, 0, 0, mapcanvas.width, mapcanvas.height);
	for (var i =0; i < users.length; i++){
		if(users[i].user != getParam('user')){
			var row = users[i].position.row;
			var col = users[i].position.col;
			var x1 = row*8.5;
			var y1 = col*14.2;
			mapctx.fillStyle = "#FF1127";
			mapctx.fillRect(x1,y1, 10, 10);
		}
		else{ // ITS YOU!
			var row = users[i].position.row;
			var col = users[i].position.col;
			var x1 = row*8.5;
			var y1 = col*14.2;
			mapctx.fillStyle = "#0D20FF";
			mapctx.fillRect(x1,y1, 10, 10);
		}
	}
}

function allPlayersTurn(){
	var allDone = true;

	for(var i =0; i < users.length; i++){
		if (users[i].turn != (parseInt(gamestats,10) +1 +"")){
			allDone = false;
		}
	}

	if(allDone){
		clearInterval(done);
		clearInterval(intervalID);
		clearInterval(intervalIDGame);

		if (gamestats %5 == 0){
			initState1();
		}
		if (gamestats %5 ==1){
			initState2();
		}
		if (gamestats %5 ==2){
			initState3();
		}
		if (gamestats %5 ==3){
			initState4();
		}
		if (gamestats %5 ==4){
			initState5();
			var id;
			for(var i =0; i< users.length; i++){
				if(users[i].user == getParam('user')){
					id =i;
				}
			}
			if(parseInt(users[id].score.bits,10) >= 32){
				setTimeout(updateUser(users[id].user, id, users[id].turn, users[id].position, users[id].minigame, {bits: parseInt(users[id].score.bits,10) -32, 
					bytes: parseInt(users[id].score.bytes,10) +1}), 2000);
			}
		}

		minigamedone = setInterval(checkMiniGames, 2000);

		function checkMiniGames(){

			var mini = true;
			for (var i = 0; i < users.length; i++){
				if(users[i].minigame != "true"){
					mini = false;
				}
			}

			if(mini){

				postGameStats('');
				clearInterval(minigamedone);

				ctx.linewidth = 1;
				ctx.fillStyle = "#000000";
				ctx.font= "24px sans-serif";
				getGameScores();

				setTimeout(checkAllScores, 5000);

				function checkAllScores(){
				
					if(minigame.length == users.length){
						var winner= {user: minigame[0].user, score: minigame[0].score};

						for (var i =0; i < minigame.length; i++){
							if(parseInt(minigame[i].score,10) > parseInt(winner.score,10)){
								winner = {user: minigame[i].user, score: minigame[i].score};
							}
							ctx.fillText("Score for " + minigame[i].user+ ": " + 
									minigame[i].score, 400,150+(i*80));
						}
					}
					ctx.fillText("The Winner is: " + winner.user, 400, 500);

					var id;
					for(var i=0; i<users.length; i++){
				
						if(users[i].user == winner.user){
							id = i;
						}
					}
					setTimeout(function(){updateUser(winner.user, id, undefined, undefined, false, 
						{bits:(parseInt(users[id].score.bits,10) + 10)+"", bytes: users[id].score.bytes})}, 2000);

				}
			}
		}
		delScores();
		setTimeout(function(){start = setInterval(startGameServer,2000);}, 40000);
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
	getGameStats();
	NUM_STEPS = -1;
	turn = true;

	setTimeout(function(){if (gamestats == 5) inGame = false;}, 3000);
	if(users.length === 2){
		turns = setInterval(turnOver, 4000);
		done = setInterval(allPlayersTurn, 4000);
		intervalID = setInterval(move, 1000);
		intervalIDGame = setInterval(drawGame, 1000);

		clearInterval(start);
		takeTurns();
		
	}
}

function takeTurns(){

	for (var i =0; i < users.length; i++){
		if(users[i].user == getParam('user') && users[i].turn == gamestats){
			showDie();
		}
	}
}

function showDie(){
	var random = setInterval(generateRandom, 50);
	cube = setInterval(drawCube,60);

	function drawCube(){
		var number = new Image();
		number.src = numberArray[randomnumber];

		number.onload = function (){
			ctx.drawImage(number, 20,20);
		}
	}

	function generateRandom(){
		randomnumber = Math.floor((Math.random()*6)+1);
		drawCube(randomnumber);
	}

	var onMouseDown = function(event){
		clearInterval(random);
		canvas.removeEventListener('click', onMouseDown,false);
		NUM_STEPS = randomnumber;
    }

    canvas.addEventListener('click', onMouseDown, false);
}



