// constants.js

var GAME_WIDTH = MiniGame2Canvas.width;
var GAME_HEIGHT = MiniGame2Canvas.height;
var PERIOD = 2;

// "board" constants
var BOARD_X = GAME_WIDTH/2;
var BOARD_Y = GAME_HEIGHT/2;
var BOARD_RADIUS = GAME_HEIGHT/2;
var BOARD_WIDTH = BOARD_X;
var BOARD_HEIGHT = GAME_HEIGHT/2;

// "card" array -- populate here (randomize?)

var CARD_ARRAY = [];

function MAKE_CARD()
{
	
}

var CARD_NUM = CARD_ARRAY.length;
var ROW_NUM = 2;
var COL_NUM = 4;
var CARD_WIDTH = (BOARD_WIDTH - ((CARD_NUM-1)*COL_NUM))/COL_NUM;
var SHAPE_HEIGHT = 20;