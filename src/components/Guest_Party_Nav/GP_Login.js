import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updateRoom, updateUser} from '../../ducks/reducer';

class GP_Login extends Component {
  constructor(props){
    super(props);
    this.state ={
      room: '',
      user: ''
    }
  }
  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({[name]: value})
  }
  handleSubmit = () => {
    // console.log(this.props.updateUser, typeof this.props.updateUser)
    this.props.updateUser(this.state.user);
    this.props.updateRoom(this.state.room);
  }
  render() {
    const {user, room} = this.state;
    return (
      <div>
        <h1>Guest Login</h1>
        <h2>Room Name:</h2>
        <input type="text" name={'room'} value={room} onChange={this.handleChange}/> 
        <h2>User:</h2>
        <input type="text" name={'user'} value={user} onChange={this.handleChange}/> 
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}
function mapStateToProps( state ){
  const {room, user} = state;
  return {
      room,
      user
  };
}
export default connect (mapStateToProps, {updateRoom, updateUser})(GP_Login); 