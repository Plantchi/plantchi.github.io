/*local port is set to :   http://localhost:3000
 */

//module requests/consts
var express = require("express");
var socket = require("socket.io");
const HOME = "public/index.html";
const HOWTO = "public/howto.html";
const TREE = "public/tree.html";
const VINE = "public/vine.html";
const SUCCULENT = "public/succulent.html";
const FLOWER = "public/flower.html";
const PORT = process.env.PORT || 3000;

//set up app
var app = express();

var server = app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});

//static files for retrieval
app.use(express.static("public"));

//pass the socket a server. "i want socketio to work on this server"
var io = socket(server);

//fetch images repo
var cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: "dkpjewza8",
  api_key: "273335887135532",
  api_secret: "Axiqeb_EEk6M67Gjjdngnod4cJ0",
});

app.get("/", (req, res) => {
  res.sendFile(HOME, { root: __dirname });
});

app.get("/howto", (req, res) => {
  res.sendFile(HOWTO, { root: __dirname });
});

app.get("/tree", (req, res) => {
  res.sendFile(TREE, { root: __dirname }); 
});

app.get("/vine", (req, res) => {
  res.sendFile(VINE, { root: __dirname });
});

app.get("/succulent", (req, res) => {
  res.sendFile(SUCCULENT, { root: __dirname });
});

app.get("/flower", (req, res) => {
  res.sendFile(FLOWER, { root: __dirname });
});
/*
io.on("connection", (socket) => {
  //"socket" refers to socket made for this instance -aka each client has own socket
  console.log("Client connected");

  socket.on("createRoom", (room) => {
    socket.join(room);
    console.log("client joined room " + room);
//    io.in(room).emit("message", "sup plant nerds");
  });
  
  socket.on("changeHp", function(data){
    data += 3; 
  }); 

  socket.on("disconnect", () => console.log("Client disconnected"));
});

//test function
setInterval(() => io.emit("time", new Date().toTimeString()), 1000);

*/ 