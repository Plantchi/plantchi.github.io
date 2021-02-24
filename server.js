/*local port is set to :   http://localhost:3000
 */
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';


//cloudinary

var cloudinary = require('cloudinary')
cloudinary.config({
  cloud_name: 'dkpjewza8',
  api_key: '273335887135532',
  api_secret: 'Axiqeb_EEk6M67Gjjdngnod4cJ0'
})

// cloudinary.url("tree.png"), {width: 100, height: 150, crop: "fill"}
//end of cloudinary

/*create http server
//create http server
const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
*/

//socket IO takes http server as arg to listen to socketIO requests
//(attach socket.io to our http server)
//const io = socketIO(server);
app.get('/', (req,res) =>{
  res.sendFile(INDEX, { root: __dirname });
})

io.on('connection', (socket) => {
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



http.listen(3000, ()=>{
  console.log(`Listening on 3000`);
});