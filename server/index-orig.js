const express = require('express');
const app = express();
const server = require('http').createServer(app)
const bodyParser = require('body-parser');
const io = require('socket.io')(server)

// io.set('origins', '*:*');

// app.use(bodyParser.json());
// app.use( express.static( `${__dirname}/src/index.js` ) );



io.sockets.on('connection', (socket) =>{
  console.log('user connected')

  socket.join('cool')

  socket.on('message', (josh) => {
      console.log(josh)
      io.in('cool').emit('messageFromServer', josh);
  })

  socket.on('disconnect', () => {
      console.log('user disconnected')
  })
})

// var host = '';
// var room = '';
// var userList = [];

// app.get('/', function(req, res){
//   res.send('<h1>Hello world</h1>');
// });

// io.on('connection', (socket) => {
//   console.log('connection made')
  // socket.on('join', (join) => {
  //   // Host, 'join.host', enters room, 'join.room'
  //   if (join.host) {
  //     host = join.host;
  //     room = join.room;
  //     socket.in(join.room).emit("host joined", {
  //       room: join.room, 
  //       host: join.host});
  //       console.log(`${join.host} started a game in room ${join.room}`)
  //   // User (guest), 'join.user', enters room - check room name
  //   } else if (join.user && room === join.room) {
  //     userList.push(join.user);
  //     socket.in(joined.room).emit('user joined', joined.userList);
  //   }
  // })
// })

// const path = require('path')
// app.get('*', (req, res)=>{
//     res.sendFile(path.join(__dirname));
// })
// app.listen(4000, "127.0.0.1");

const port = 4500;
app.listen(port, () => console.log( `All systems go, approaching at vector ${port}`));
