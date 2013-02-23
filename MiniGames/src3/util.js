var pair1Img;
var pair2Img;
var pair3Img;
var pair4Img;
var pair5Img;
var pair6Img;
var pair7Img;
var pair8Img;

function loadImages()
{
	pair1Img = new Image();
	pair1Img.src = PAIR_1_IMG;
	pair2Img = new Image();
	pair2Img.src = PAIR_2_IMG;
	pair3Img = new Image();
	pair3Img.src = PAIR_3_IMG;
	pair4Img = new Image();
	pair4Img.src = PAIR_4_IMG;
	pair5Img = new Image();
	pair5Img.src = PAIR_5_IMG;
	pair6Img = new Image();
	pair6Img.src = PAIR_6_IMG;
	pair7Img = new Image();
	pair7Img.src = PAIR_7_IMG;
	pair8Img = new Image();
	pair8Img.src = PAIR_8_IMG;

	//levelOneImg = new Image();
	//levelOneImg.src = LEVEL_ONE_IMG;
}

function CARD(img)
{
	this.x;
	this.y;
	this.x1;
	this.y1;
	this.img = img;
	this.show = false;
	this.clickable = true;
}

function PAIR(img)
{
	this.card1 = new CARD(img);
	this.card2 = new CARD(img);
	CARD_ARRAY.push(this.card1, this.card2);
}

// make pairs
function MAKE_PAIRS()
{
	var pair1 = new PAIR(pair1Img);
	var pair2 = new PAIR(pair2Img);
	var pair3 = new PAIR(pair3Img);
	var pair4 = new PAIR(pair4Img);
	var pair5 = new PAIR(pair5Img);
	var pair6 = new PAIR(pair6Img);
	var pair7 = new PAIR(pair7Img);
	var pair8 = new PAIR(pair8Img);
}

function RANDOMIZE_PAIRS()
{
	for (var i = 0; i < CARD_ARRAY.length; i++)
	{
		var random = Math.floor(Math.random() * CARD_ARRAY.length);
		var tempCard = CARD_ARRAY[i];
		CARD_ARRAY[i] = CARD_ARRAY[random];
		CARD_ARRAY[random] = tempCard;
	}
}

function SET_CARD_PARAMS()
{
	for (var i = 0; i < CARD_ARRAY.length; i++)
	{
		var colNum = i%COL_NUM;
		var rowNum = (i-colNum)/COL_NUM;
		var cardX = CARD_WIDTH * colNum + BOARD_X;
		var cardY = CARD_HEIGHT * rowNum + BOARD_Y;
		CARD_ARRAY[i].x = cardX + (PADDING*colNum);
		CARD_ARRAY[i].y = cardY + (PADDING*rowNum);
		CARD_ARRAY[i].x1 = CARD_ARRAY[i].x + CARD_WIDTH;
		CARD_ARRAY[i].y1 = CARD_ARRAY[i].y + CARD_HEIGHT;
	}
}