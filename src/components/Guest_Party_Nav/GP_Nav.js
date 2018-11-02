import React, { Component } from 'react';
import {connect} from 'react-redux';
import socketIOClient from 'socket.io-client';

const socket = socketIOClient("http://192.168.1.5:4000/");

class GP_Nav extends Component {
  constructor(props){
    super(props);
    this.state ={
      user: props.user,
      room: props.room,
      userList: [],
    }
    socket.emit('join user', {
        user: this.state.user.toLowerCase(),
        room: this.state.room.toLowerCase()
    })
    socket.on('user joined', (userJoin) => {
      socket.join(userJoin.room)
      console.log(`${this.state.user} joined a game in room ${this.state.room}`);
    })
    socket.on('joined', (joined) => {
      console.log('GP_Nav.js, before setState', this.state.userList)
      console.log('GP_Nav.js, joined.userList', this.state.userList)
      this.setState({
        room: joined.room,
        userList: joined.userList})
      console.log(`The user list is ${this.state.userList} in room, ${this.state.room}`)
    })
  }
  socketTestBtn = () => {
    console.log('socket test button clicked!');
    socket.emit('test', {message: 'This is a test'})
  }
  render() {
    console.log('GP_Nav, this.state', this.state)
    return (
      <div>
        <h1>GP_Nav</h1>
        <h2>Guest Party Navigation</h2>
        <button onClick={this.socketTestBtn}>Test Socket</button>

      </div>
    )
  }
}
function mapStateToProps( state ){
  const {room, user} = state;
  return {
      room,
      user,
  };
}
export default connect (mapStateToProps)(GP_Nav); 