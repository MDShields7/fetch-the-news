import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updateRoom, updateHost} from '../../ducks/reducer'


class H_Login extends Component {
  constructor(props){
    super(props);
    this.state ={
      room: '',
      host: ''
    }
  }
  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({[name]: value})
  }
  handleSubmit = () => {
    console.log(this.props.updateHost, typeof this.props.updateHost)
    this.props.updateHost(this.state.host);
    this.props.updateRoom(this.state.room);
    
  }
  render() {
    const {host, room} = this.state;
    return (
      <div>

        <h1>Host Login</h1>
        <h2>Room Name:</h2>
        <input type="text" name={'room'} value={room} onChange={this.handleChange} room={room}/> 
        <h2>Host username:</h2>
        <input type="text" name={'host'} value={host} onChange={this.handleChange} host={host}/> 
        <button onClick={this.handleSubmit}>Submit</button>
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
export default connect (mapStateToProps, {updateRoom, updateHost})(H_Login); 