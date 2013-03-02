The Adventures of Silicon Valley
=============

## Team Members 
+ Folashade Okunubi - **foo** 
+ Samaan Ghani - **sghani**
+ Lydia U - **lju**

## Game Play
### Description
Silicon Valley is a game that allows players to explore the companies in Silicon Valley. The companies include Microsoft, Google, Apple, and Facebook. 

### How To Play
Before you start, make sure that there are NO files in the data folder!
Click one of the players to becomes logged in. Wgen all players have logged in, the game will start. If a player button is disabled, that means that somone has already logged in as them.  

When the game starts, You will see a die. Once you click the screen, the number that the die lands on is the number of spaces your player will move. After every player has moved, a mini game will begin. Try to get as high os a score as you can. Your results will be accessible on the STATS page. There is a link on the left hand side of the screen in the navigation bar. The game ends on the 6th turn for now because it showcases everything we have done by then.

CHAT:
There is a chat feature on the side which can be utilized to chat with your opponent at any time. 
NAV Bar:
The Navigation Bar has several tabs:
Game: Goes back to the game
Info: Information about the game.
Developers: Info about the dev team.
Stats: Scores during the game. 

MINI MAP View:
View the map zoomed out so that you can see where you are in reference to your opponent!

## Development
### Required Elements
Your project must demonstrate clear and effective use of all of the technologies, tools, or techniques from this list (be sure to itemize these clearly in your README file, along with some specific file/lineNumber citations into your own code):

1. Javascript (including creating your own objects but not with inheritance)
- Javascript is the core of our game. We have many js files in static/gameplay.js and the javascript for each minigames is in src folder. (Minigame1 connects with src1 folder, and so on). The minigames are: Facebook: get most likes game, Apple: collect the devices, Google: Memory game, Microsoft: DDR!
	
2. Canvas
We have 2 main canvases on the main page, and our mini games each use canvas. 

3. HTML (including a reasonably wide range of techniques, such as tables, forms with form validation, etc)
static/index.html and static/game.html are our main files. 

4. CSS (including a reasonably range of techniques, such as reset, pseudo-selectors, fixed and fluid layout, etc)
- We have separate files for css for clarity. in static/style.css all the style for the page is held. There is some extra css in static/style/mini1.css which holds css for the games. 

5. DOM manipulation
- For our chat screen, we are loading the messages into the message view. After message submission, the message is input into the DOM and visible inthe chat box. 
- For the login page, the buttons are disabled once they are clicked, and the disabled button is put into the DOM.

6. JQuery
- This page originally loads all the content from the game.html page and alot of the content is set to `dispay:none;` in the CSS files. JQuery accesses the DOM and changes the display so that it is nwo visible. JQuery allows for beautification and fading in and out. 

7. AJAX client (consume an API)
-logic.js
- All the information is shared among players, the client provides access to the other player's scores, turn information, miniGame status (are they still
playing or are they done), geolocation, and chat messages!

8. AJAX server (provide an API)
- App.JS 
-The server shares the information with the client.

### Resources
+ [Markdown: Quick Reference Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
+ [Markdown: Verbose Syntax Description](http://daringfireball.net/projects/markdown/syntax)
+ [Box Shadows](http://www.css3.info/preview/box-shadow/)


### Questions
+ How do we ..

17 x 23
330 200 
dot with rol col 
