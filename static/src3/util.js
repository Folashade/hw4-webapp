/*15-237 Project 4
 * Samaan Ghani (sghani), Folashade Okunubi (foo),  Lydia Utkin(lju)
 * Due: 26 February 2013 
 
 Based off of Mario Party series.
*/

var pair1Img;
var pair2Img;
var pair3Img;
var pair4Img;
var pair5Img;
var pair6Img;
var pair7Img;
var pair8Img;
var flip_card;

function loadImages3()
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
	flip_card = new Image();
	flip_card.src = FLIP_CARD;
}

function CARD(img, pair)
{
	this.x;
	this.y;
	this.x1;
	this.y1;
	this.img = img;
	this.isClicked = false;
	this.clickable = true;
	this.pair = pair;
}

// make pairs
function MAKE_CARDS()
{
	var card1a = new CARD(pair1Img, 1);
	var card1b = new CARD(pair1Img, 1);
	var card2a = new CARD(pair2Img, 2);
	var card2b = new CARD(pair2Img, 2);
	var card3a = new CARD(pair3Img, 3);
	var card3b = new CARD(pair3Img, 3);
	var card4a = new CARD(pair4Img, 4);
	var card4b = new CARD(pair4Img, 4);
	var card5a = new CARD(pair5Img, 5);
	var card5b = new CARD(pair5Img, 5);
	var card6a = new CARD(pair6Img, 6);
	var card6b = new CARD(pair6Img, 6);
	var card7a = new CARD(pair7Img, 7);
	var card7b = new CARD(pair7Img, 7);
	var card8a = new CARD(pair8Img, 8);
	var card8b = new CARD(pair8Img, 8);
	CARD_ARRAY.push(card1a, card1b, card2a, card2b, card3a, card3b, card4a, card4b, card5a, card5b, card6a, card6b, card7a, card7b, card8a, card8b)
}

function RANDOMIZE_CARDS()
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

function PAIR_CHECK()
{
	if (CARD_ARRAY[CHOSEN1INDEX].pair !== CARD_ARRAY[CHOSEN2INDEX].pair)
	{	
		CARD_ARRAY[CHOSEN1INDEX].clickable = true;
		CARD_ARRAY[CHOSEN2INDEX].clickable = true;
		CARD_ARRAY[CHOSEN1INDEX].isClicked = false;
		CARD_ARRAY[CHOSEN2INDEX].isClicked = false;
	}
	
	else
	{
		CARD_ARRAY[CHOSEN1INDEX].isClicked = true;
		CARD_ARRAY[CHOSEN2INDEX].isClicked = true;
		SCORE++;
	}
	
	CHOSEN1INDEX = -1;
	CHOSEN2INDEX = -1;
	NUM_CHOSEN = 0;
	canvas.addEventListener('mousedown', onMouseDown, false);
}