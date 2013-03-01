// util.js

var arrowUpImg;
var arrowDownImg;
var arrowLeftImg;
var arrowRightImg;
//var levelOneImg;

function loadImages4()
{
	arrowUpImg = new Image();
	arrowUpImg.src = ARROW_UP_IMG;
	arrowDownImg = new Image();
	arrowDownImg.src = ARROW_DOWN_IMG;
	arrowLeftImg = new Image();
	arrowLeftImg.src = ARROW_LEFT_IMG;
	arrowRightImg = new Image();
	arrowRightImg.src = ARROW_RIGHT_IMG;
	
	arrowUpImgOutline = new Image();
	arrowUpImgOutline.src = ARROW_UP_IMG_OUTLINE;
	arrowDownImgOutline = new Image();
	arrowDownImgOutline.src = ARROW_DOWN_IMG_OUTLINE;
	arrowLeftImgOutline = new Image();
	arrowLeftImgOutline.src = ARROW_LEFT_IMG_OUTLINE;
	arrowRightImgOutline = new Image();
	arrowRightImgOutline.src = ARROW_RIGHT_IMG_OUTLINE;
	
	logo = new Image();
	logo.src = WINDOWS_LOGO;
	
	//levelOneImg = new Image();
	//levelOneImg.src = LEVEL_ONE_IMG;
}

function addArrows()
{
	var newArrow = new Arrow();
	ARROW_ARRAY.push(newArrow);
}

function checkForKeys4()
{
	if (keyPressed(KEY_R)) {
		newGame();
	}

	if (keyPressed(KEY_S)) {
		clearInterval(intervalID);
		gameState = 1;
		initState();
	}
}

function checkForKeysTimer()
{
	checkForKeysInterval = setInterval(checkForKeys4, 40);
}