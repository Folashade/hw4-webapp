// 15-237 Homework 4- Server

var express = require("express"); // imports express
var app = express();        // create a new instance of express

// imports the fs module (reading and writing to a text file)
var fs = require("fs");
var path = require("path");

// the bodyParser middleware allows us to parse the
// body of a request
app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, 'static')));

// The global datastore for this example
var messages;
var users;
var userarray;
var gamestats;

function hash(k) {
  return userarray[k];
}


// Asynchronously read file contents, then call callbackFn
function readFile(filename, defaultData, callbackFn) {
  fs.readFile(filename, function(err, data) {
    if (err) {
      console.log("Error reading file: ", filename);
      data = defaultData;
    } else {
      console.log("Success reading file: ", filename);
    }
    if (callbackFn) callbackFn(err, data);
  });
}

// Asynchronously write file contents, then call callbackFn
function writeFile(filename, data, callbackFn) {
  fs.writeFile(filename, data, function(err) {
    if (err) {
      console.log("Error writing file: ", filename);
    } else {
      console.log("Success writing file: ", filename);
    }
    if (callbackFn) callbackFn(err);
  });
}

// get all items
app.get("/messages", function(request, response){
  response.send({
    messages: messages,
    success: true
  });
});

app.get("/gamestats", function(request, response){
  response.send({
    gamestats: gamestats,
    success:true
  });
});

app.get("/users", function(request,response){
  response.send({
    users: users,
    success:true
  });
});

app.get("/userarray", function(request,response){
  response.send({
    userarray: userarray,
    success:true
  });
});

app.put("/users/:id", function (request, response){
  var id = request.params.id;
  var oldItem = users[id];
  var item = {"user": request.body.user,
              "turn": request.body.turn,
              "position": request.body.position,
              "minigame": request.body.minigame,
              "score": request.body.score,
              "date": new Date()};
  item.user = (item.user !== undefined) ? item.user : oldItem.user;
  item.turn = (item.turn !== undefined) ? item.turn : oldItem.turn;
  item.position = (item.position !== undefined) ? item.position : oldItem.position;
  item.minigame = (item.minigame !== undefined) ? item.minigame : oldItem.minigame;
  item.score = (item.score !== undefined) ? item.score : oldItem.score;

  users[id] = item;
  writeFile("data/users.txt", JSON.stringify(users));
  response.send({
    item: item,
    success: true
  });
});

//create new user
app.post("/users", function(request,response){
  console.log("SERVER CREATE NEW USER");
  var item = {"user": request.body.user,
              "turn": request.body.turn,
              "position": request.body.position,
              "minigame": request.body.minigame,
              "score": request.body.score,
              "date": new Date()};
  var user = request.body.user;

  var successful = (item.user !== undefined) && (item.turn !== undefined)
                    && (item.position !== undefined)
                    && (item.minigame !== undefined) && (item.score !== undefined);

  if (successful) {
    users.push(item); 
    userarray[user] = {"score": 0};
    writeFile("data/users.txt", JSON.stringify(users));
    //writeFile("data/"+ user + ".txt", JSON.stringify(hash(user)));
  }else {
    item = undefined;
  }

  response.send({
    item: item,
    success: successful
  });
});

//create gamestats
app.post("/gamestats", function(request,response){
  var item = {"gamestats": request.body.gamestats};

  var successful = (item.gamestats !== undefined);

  if (successful) {
    gamestats = item.gamestats;
    writeFile("data/gamestats.txt", JSON.stringify(item));
  }else {
    item = undefined;
  }

  response.send({
    item: item,
    success: successful
  });
});

// create new message
app.post("/messages", function(request, response) {
  console.log(request.body);
  var item = {"message": request.body.message,
              "user": request.body.user,
              "date": new Date()};

  var successful = (item.message !== undefined);

  if (successful) {
    messages.push(item);
    writeFile("data/data.txt", JSON.stringify(messages));
  } else {
    item = undefined;
  }

  response.send({ 
    item: item,
    success: successful
  });
});

function initServer() {
  // When we start the server, we must load the stored data
  var defaultList = "[]";
  readFile("data/data.txt", defaultList, function(err, data) {
    messages = JSON.parse(data);
  });
  readFile("data/users.txt", defaultList, function(err, data) {
    users = JSON.parse(data);
  });
  readFile("data/gamestats.txt", defaultList, function(err, data) {
    gamestats = JSON.parse(data);
  });
  userarray = new Object();
}

// Finally, initialize the server, then activate the server at port 8889
initServer();
app.listen(8889);
