const express = require('express');
const app = express();
const server = require('http').createServer(app)
const bodyParser = require('body-parser');
const io = require('socket.io')(server)

var host = '';
var room = 'hi';
var userList = [];
let counter = 0;
//[{ host:true, avatar_image:'Fluffy_url', avatar_name:'Fluffy', totalScore:150, roundScore:50 }, {}, {} ]

// function createUser (joinUserObj){
//   return
// }
function User (host, room, user, avatar_image, avatar_color, roundScore, currentScore)
{
  this.host = host;
  this.user = user;
  this.avatar_name = avatar_name;
  this.avatar_image = avatar_image;
  this.roundScore = roundScore;
  this.currentScore = currentScore;
}

io.sockets.on('connection', (socket) =>{
  console.log(socket)
  // console.log('the room is "', room, '"')
  // console.log(`user connected, ${socket['id']}`);
  // socket.on('test', message => {
  //   console.log(`${message.message}`);
  // })
  socket.on('join host', (join) => {
    console.log('host', join.host, 'enters room', join.room);
    if (join.host) {  host = join.host;   room = join.room  }
  });
  socket.on('join user', (join) => {
    socket.join.id = counter;
    socket.join.user = join.user;
    console.log('user', join.user, 'enters room', join.room, 'id', socket.join.id);
    if (join.user) {
      let newUser = { 
        id: counter,
        host: null,
        user: join.user,
        // avatar_name: join.avatar_name,
        avatar_image: join.avatar_image,
        avatar_color: join.avatar_color,
        roundScore: 0,
        currentScore: 0,
      };

      counter++;
      !userList[0] ? newUser.host=true :newUser.host=false
      userList.push(newUser);
    }
    
    socket.join(join.room);
    io.in(join.room).emit("joined", {room: room, userList: userList})
    // console.log('put in room')

    // socket.emit('joined', (joined) => {
    //   this.state.userList = join.userList;
    //   console.log(`In room, ${this.state.room}, the user list is ${this.state.userList}`)
    // })
  });
  socket.on('disconnect', () => {
    for (i = userList.length-1; i>=0; i--){
      // console.log(userList,userList[i])
      if (userList[i]['id'] === socket.join.id){
      // console.log('before list length', userList.length, userList)
      userList.splice(i, 1)
      }
    }
    // console.log('after splice list length', userList.length, userList)
    // console.log(`user disconnected, ${socket['id']}`)
    console.log('user', socket.join.user, ', id', socket.join.id, 'disconnected', '.', userList.length, 'users still in room')
    if(userList[0] ){room = ''}
  })
})

const PORT = 4000;
server.listen(PORT, ()=> console.log(`Server listening on port PORT`));