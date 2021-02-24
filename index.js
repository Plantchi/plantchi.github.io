/*local port is set to :   http://localhost:3000 
 */

 //module requests/consts
var express = require('express');
var socket = require('socket.io'); 
const HOWTO = 'public/howto.html';
const PORT = process.env.PORT || 3000;


//set up app 
var app = express();

var server =app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

//static files for retrieval
app.use(express.static('public'));

//pass the socket a server. "i want socketio to work on this server"
var io = socket(server);

//cloudinary

var cloudinary = require('cloudinary')
cloudinary.config({
  cloud_name: 'dkpjewza8',
  api_key: '273335887135532',
  api_secret: 'Axiqeb_EEk6M67Gjjdngnod4cJ0'
})

// cloudinary.url("tree.png"), {width: 100, height: 150, crop: "fill"}
//end of cloudinary


app.get('/howto', (req,res) =>{
  res.sendFile(HOWTO, { root: __dirname });
})

app.get('/tree', (req,res) =>{
  res.sendFile(HOWTO, { root: __dirname }); //make a page for the tree interaction aka general care page with tree photo 
})


io.on('connection', (socket) => { //"socket" refers to socket made for this instance -aka each client has own socket
  console.log('Client connected');
 
  socket.on('createRoom', room => {
    socket.join(room);
    console.log('client joined room ' + room);
    io.in(room).emit('message', 'sup plant nerds');
  })

  socket.on('disconnect', () => console.log('Client disconnected'));

  
});

//test function
setInterval(() => io.emit('time', new Date().toTimeString()), 1000);

