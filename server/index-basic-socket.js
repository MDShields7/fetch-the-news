const express = require('express');
const app = express();
const server = require('http').createServer(app)
const bodyParser = require('body-parser');
const io = require('socket.io')(server)

io.sockets.on('connection', (socket) =>{
    console.log('user connected')
})

const PORT = 4000;
server.listen(PORT, ()=> console.log(`Server listening on port PORT`));