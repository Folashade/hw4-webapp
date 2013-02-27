mapcanvas = document.getElementById("map-canvas");
mapctx = mapcanvas.getContext("2d");

clearInterval(checkUsers);
var start = setInterval(startGame, 2000);
setInterval(getMessages, 2000);
setInterval(getUsers, 2000);
var inGame = false;

var numberArray = ["", "img/numbers/1.png", "img/numbers/2.png","img/numbers/3.png","img/numbers/4.png","img/numbers/5.png","img/numbers/6.png"];


function startGame(){
	console.log("startGame");
	getUsers();
	if(users.length === 1 ){
		inGame = true;
		alert("Everyone has logged in let's play!!");
		clearInterval(start);
		takeTurns();
	}
}

function takeTurns(){
	console.log("currentTurn is:" + gamestats);
	for (var i =0; i < users.length; i++){
		console.log(users[i].turn);
		if(users[i].turn == gamestats && users[i].user == getParam('user')){
			console.log("WOOOOWOWOWOWOWOW");
			showDie();
		}
	}
}

function showDie(){
	console.log("SHOW DIE");
	mapctx.fillStyle = "#B182F8";
	mapctx.fillRect(100,40,80,50);
	var random = setInterval(generateRandom, 200);

	var randomnumber;

	function generateRandom(){
		console.log("generateRandom!!!");
		randomnumber = Math.floor((Math.random()*6)+1);
		var number = new Image();
		number.src = numberArray[randomnumber];

		number.onload = function (){
			console.log("DRAWING IMAGE");
			mapctx.drawImage(number, 100,40);
		}

	}
	var onKeyDown = function(event){
		clearInterval(random);
    	alert("You move:" + randomnumber);
    	//movePlayer();
    	//updatePlayerTurn();
    	canvas.removeEventListener('keydown', onKeyDown,false);
    }

	canvas.addEventListener('keydown', onKeyDown, false);
}

//TODO movePlayer()
//access the array position

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
		console.log("left!!");
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
	console.log("moveplayer...");
	if (direction === 'left'){
		console.log("redrawing at left...");
		canvasx = canvasx-70;
		ctx.drawImage(gameboard, canvasx, canvasy , 600, 500, 0,0, 600,500);
		drawPlayer();
	}
	else if(direction === 'right'){
		console.log("redrawing at right...");
		canvasx = canvasx+70;
		ctx.drawImage(gameboard, canvasx, canvasy , 600, 500, 0,0, 600,500);
		drawPlayer();
	}
	else if (direction === 'up'){
		console.log("redrawing at left...");
		canvasy = canvasy-70;
		ctx.drawImage(gameboard, canvasx, canvasy , 600, 500, 0,0, 600,500);
		drawPlayer();
	}
	else{
		console.log("redrawing at left...");
		canvasy = canvasy+70;
		ctx.drawImage(gameboard, canvasx, canvasy , 600, 500, 0,0, 600,500);
		drawPlayer();
	}
}
function drawPlayer (){
	console.log("drawing player...");
	ctx.fillStyle="#FF0000";
	ctx.fillRect(280, 290,50,50);
	playerx = canvasx+ (280+25);
	playery = canvasy + (290+25);
}*/


