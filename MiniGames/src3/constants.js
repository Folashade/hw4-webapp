// constants.js

var GAME_WIDTH = MiniGame3Canvas.width;
var GAME_HEIGHT = MiniGame3Canvas.height;
var PERIOD = 20;

// "board" constants
var BOARD_HEIGHT_MARGIN = 100;
var BOARD_WIDTH_MARGIN = 40;
var BOARD_WIDTH = GAME_WIDTH - BOARD_WIDTH_MARGIN;
var BOARD_HEIGHT = GAME_HEIGHT - BOARD_HEIGHT_MARGIN;
var BOARD_X = GAME_WIDTH/2 - BOARD_WIDTH/2;
var BOARD_Y = GAME_HEIGHT/2 - BOARD_HEIGHT/2;
var PADDING = 3;

// "card" array -- populate here (randomize?)

var PAIR_1_IMG = "img3/pair1Img.png";
var PAIR_2_IMG = "img3/pair2Img.png";
var PAIR_3_IMG = "img3/pair3Img.png";
var PAIR_4_IMG = "img3/pair4Img.png";
var PAIR_5_IMG = "img3/pair5Img.png";
var PAIR_6_IMG = "img3/pair6Img.png";
var PAIR_7_IMG = "img3/pair7Img.png";
var PAIR_8_IMG = "img3/pair8Img.png";

var CARD_ARRAY = [];

var CARD_NUM = CARD_ARRAY.length;
var ROW_NUM = 4;
var COL_NUM = 4;
var CARD_WIDTH = (BOARD_WIDTH - (COL_NUM*PADDING))/COL_NUM; 
var CARD_HEIGHT = (BOARD_HEIGHT - (ROW_NUM*PADDING))/ROW_NUM;
var CARD_DELAY = 500;
var SCORE = 0;

var NUM_CHOSEN = 0;
var CHOSEN1INDEX = -1;
var CHOSEN2INDEX = -1;