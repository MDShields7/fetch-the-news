import React, { Component } from 'react';
import {connect} from 'react-redux';
import socketIOClient from 'socket.io-client';
const socket = socketIOClient();

class HP_Nav extends Component {
  constructor(props){
    super(props);
    this.state ={
      host: props.host,
      room: props.room
    }
    socket.emit('join', {
        host: this.state.host.toLowerCase(),
        room: this.state.room.toLowerCase()
    })
    socket.on('host joined', (join) => {
      console.log(`${this.state.host} started a game in room ${this.state.room}`);
    })
  }



  render() {
    // console.log('HPNav, this.props', this.props)
    console.log('HPNav, this.state', this.state)
    return (
      <div>
        <h1>Host Party Nav</h1>
        <h2>Players go to .... to log in</h2>
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