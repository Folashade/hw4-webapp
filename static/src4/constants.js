// constants.js
// Mini Game 4 "DDR" Constants

var GAME_WIDTH = MiniGame4Canvas.width;
var GAME_HEIGHT = MiniGame4Canvas.height;
var PERIOD = 1;

// slide is the area in which the arrows appear!
var SLIDE_WIDTH = GAME_WIDTH/2;
var SLIDE_HEIGHT = GAME_HEIGHT;

var SLIDE_X = (GAME_WIDTH/2) - (SLIDE_WIDTH/2);

// "arrow" constants
var ARROW_DISTANCE = SLIDE_WIDTH/4;

var ARROW_UP_IMG = "img4/arrowUpColor.png";
var ARROW_DOWN_IMG = "img4/arrowDownColor.png";
var ARROW_LEFT_IMG = "img4/arrowLeftColor.png";
var ARROW_RIGHT_IMG = "img4/arrowRightColor.png";

var ARROW_UP_IMG_OUTLINE = "img4/arrowUpGray.png";
var ARROW_DOWN_IMG_OUTLINE = "img4/arrowDownGray.png";
var ARROW_LEFT_IMG_OUTLINE = "img4/arrowLeftGray.png";
var ARROW_RIGHT_IMG_OUTLINE = "img4/arrowRightGray.png";

var ARROW_LEFT_X = SLIDE_X;
var ARROW_DOWN_X = SLIDE_X + ARROW_DISTANCE;
var ARROW_UP_X = SLIDE_X + (ARROW_DISTANCE*2);
var ARROW_RIGHT_X = SLIDE_X + (ARROW_DISTANCE*3);

var WINDOWS_LOGO = "img4/windows.png";

var ARROW_PERIOD = 1000;

var FEEDBACK = ""

// "arrow" array
var ARROW_ARRAY = [];
var ARROW_SIZE = 100;
var SCORE = 0;
var NEW_LEVEL_SCORE = 200;