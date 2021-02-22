/*local port is set to :   http://localhost:3000
 */
const express = require('express')
const socketIO = require('socket.io')
//const {Server} = require('ws');

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';

//create http server
const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));


//web socket server takes an http server as an arguement to listen to events on client side (reqs)
//const wss = new Server ({ server }) 

//socket IO takes http server as arg to listen to socketIO requests
const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('createRoom',function(room){
    socket.join(room);
    console.log('client joined room' + room);
  })
  socket.on('disconnect', () => console.log('Client disconnected'));
});

room = '1';
io.in(room).emit('message', "whats up plant nerds");
//test function
setInterval(() => io.emit('time', new Date().toTimeString()), 1000);