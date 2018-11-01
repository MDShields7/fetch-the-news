import React, { Component } from 'react';
import {connect} from 'react-redux';
import socketIOClient from 'socket.io-client';
const socket = socketIOClient("http://192.168.1.5:4000/");

class HP_Nav extends Component {
  constructor(props){
    super(props);
    this.state ={
      host: props.host,
      room: props.room,
      userList: [],
    }
    socket.emit('join host', {
        host: this.state.host.toLowerCase(),
        room: this.state.room.toLowerCase()
    })
    socket.on('host joined', (hostJoin) => {
      socket.join(hostJoin.room)

      console.log(`${this.state.host} started a game in room ${this.state.room}`);
    })
    socket.on('joined', (joined) => {
      console.log('HP_Nav.js, before setState')
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
    // console.log('HPNav, this.props', this.props)
    console.log('HP_Nav, this.state', this.state)
    return (
      <div>
        <h1>Host Party Nav</h1>
        <h2>Players go to .... to log in</h2>
        <button onClick={this.socketTestBtn}>Test Socket</button>
      </div>
    )
  }
}
function mapStateToProps( state ){
  const {room, host} = state;
  return {
      room,
      host
  };
}
export default connect (mapStateToProps)(HP_Nav); 