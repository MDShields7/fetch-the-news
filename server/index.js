const express = require('express');
const app = express();
const server = require('http').createServer(app)
const bodyParser = require('body-parser');
const io = require('socket.io')(server)

var host = '';
var room = 'placeholder';
var userList = [];


io.sockets.on('connection', (socket) =>{
  console.log('the room is "', room, '"')
  console.log(`user connected, ${socket['id']}`);
  socket.on('test', message => {
    console.log(`${message.message}`);
  })
  socket.on('join host', (join) => {
    console.log('host', join.host, 'enters room', join.room);
    if (join.host) {
      host = join.host;
      room = join.room;
      // console.log('the room is "', room, '"')
    }
  });
  socket.on('join user', (join) => {
    console.log('user', join.user, 'enters room', join.room);
    if (join.user) {
      console.log(userList, typeof userList);
      userList.push(join.user);
      console.log(userList, typeof userList);
    }
    // console.log('putting in room, sending room and userlist')
    socket.join(join.room);
    io.in(join.room).emit("joined", {room: room, userList: userList})
    // console.log('put in room')

    // socket.emit('joined', (joined) => {
    //   this.state.userList = join.userList;
    //   console.log(`In room, ${this.state.room}, the user list is ${this.state.userList}`)
    // })
  });
  socket.on('disconnect', () => {
    console.log(`user disconnected, ${socket['id']}`)
  })
})

const PORT = 4000;
server.listen(PORT, ()=> console.log(`Server listening on port PORT`));