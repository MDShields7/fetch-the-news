const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use( express.static( `${__dirname}/src/index.js` ) );


var host = '';
var room = '';
var userList = [];


io.sockets.on('connection', (socket) => {

  socket.on('join', (join) => {
    // Host, 'join.host', enters room, 'join.room'
    if (join.host) {
      host = join.host;
      room = join.room;
      io.in(join.room).emit("host joined", {
        room: join.room, 
        host: join.host});
        console.log(`${join.host} started a game in room ${join.room}`)
    // User (guest), 'join.user', enters room - check room name
    } else if (join.user && room === join.room) {
      userList.push(join.user);
      io.in(joined.room).emit('user joined', joined.userList);

    }
    // userList.push(join['id']);
    // console.log(userList);
    //   socket.join(joined.room)
    //   io.in(join.room).emit("joined", {room: joined.room, id: joined.id, username: joined.username, userList: joined.userList})
    //   console.log('after join',joined.userList);
    //   io.to(socket.id).emit('user_id', joined.id);
    //   io.in(joined.room).emit('userlist', joined.userList);
  })
})


const port = 4000;
app.listen(port, () => console.log( `All systems go, approaching at vector ${port}`));
