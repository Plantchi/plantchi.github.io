/*local port is set to :   http://localhost:3000
 */
const express = require('express')
const {Server} = require('ws');

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));


//web socket server takes an http server as an arguement to listen to events on client side (reqs)
const wss = new Server ({ server }) 

wss.on('connection',(ws) => {
    console.log('Client Connected');
    ws.on('close', () => console.log('Client has disconnected'))
})

setInterval(() => {
  wss.clients.forEach((client) => {
    client.send(new Date().toTimeString());
  });
}, 1000);
