// constants.js
// Bank constants

var GAME_WIDTH = BankCanvas.width;
var GAME_HEIGHT = BankCanvas.height;
var PERIOD = 2;

var RECTANGLE_WIDTH = GAME_WIDTH/10;
var RECTANGLE_HEIGHT = GAME_HEIGHT/4;

var BIT_ARRAY = [];

var PADDING = 5;

var ROW_NUM = 1;
var COL_NUM = 8;
var BIT_WIDTH = (GAME_WIDTH - ((COL_NUM + 1)*PADDING))/COL_NUM; 
var BIT_HEIGHT = GAME_HEIGHT/3; //(GAME_HEIGHT - (ROW_NUM*PADDING))/ROW_NUM;
var BYTE_VALUE = -1;

var CURRENTLY_CLICKED = -1;

var NUM_1_BITS = 7;
var NUM_0_BITS = 13;

var ONE_KEY = 49;
var ZERO_KEY = 48;

var ONE = false;
var ZERO = false;

var RIGHT_KEY = 39;
var LEFT_KEY = 37;