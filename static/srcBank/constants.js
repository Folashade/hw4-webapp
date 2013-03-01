/*15-237 Project 4
 * Samaan Ghani (sghani), Folashade Okunubi (foo),  Lydia Utkin(lju)
 * Due: 26 February 2013 
 
 Based off of Mario Party series.
*/

// constants.js
// Bank constants

var BANK_IMAGE = "imgBank/bank.jpg";
// var LAMP = "imgBank/lampT.png";
var LAMP = "imgBank/money.jpg";
var WOOD = "imgBank/wood.jpeg";

var GAME_WIDTH = canvas.width;
var GAME_HEIGHT = canvas.height;
var PERIOD = 5;

var RECTANGLE_WIDTH = GAME_WIDTH/10;
var RECTANGLE_HEIGHT = GAME_HEIGHT/4;

var BIT_ARRAY = [];

var PADDING = 5;

var ROW_NUM = 1;
var COL_NUM = 8;
var BIT_WIDTH = (GAME_WIDTH - ((COL_NUM + 1)*PADDING))/COL_NUM; 
var BIT_HEIGHT = GAME_HEIGHT/4; //(GAME_HEIGHT - (ROW_NUM*PADDING))/ROW_NUM;
var BYTE_VALUE = "NaN";

var CURRENTLY_CLICKED = -1;

var NUM_BITS = 32;

var RANDOM = Math.floor(Math.random() * NUM_BITS);
var NUM_1_BITS = RANDOM;
var NUM_0_BITS = NUM_BITS - RANDOM;

var ONE_KEY = 49;
var ZERO_KEY = 48;

var ONE = false;
var ZERO = false;

var RIGHT_KEY = 39;
var LEFT_KEY = 37;
var TAB_KEY = 9;

var BUTTON_PADDING = 5;

var TIMEOUT = 4000;
var TOTAL_TIME = 14000; // 15 secs
var TEXT_PADDING = 5;