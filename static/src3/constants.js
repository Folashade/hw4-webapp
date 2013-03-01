/*15-237 Project 4
 * Samaan Ghani (sghani), Folashade Okunubi (foo),  Lydia Utkin(lju)
 * Due: 26 February 2013 
 
 Based off of Mario Party series.
*/

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

var PAIR_1_IMG = "img3/doodle1.png";
var PAIR_2_IMG = "img3/doodle2.png";
var PAIR_3_IMG = "img3/doodle3.png";
var PAIR_4_IMG = "img3/doodle4.png";
var PAIR_5_IMG = "img3/doodle5.png";
var PAIR_6_IMG = "img3/doodle6.png";
var PAIR_7_IMG = "img3/doodle7.png";
var PAIR_8_IMG = "img3/doodle8.png";
var FLIP_CARD = "img3/drive.png";

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

var TIMEOUT = 4000;
var TOTAL_TIME = 14000; // 15 secs
var TEXT_PADDING = 5;