import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updateRoom, updateUser} from '../../ducks/reducer';
import GPLobby from './GP_Lobby/GP_Lobby';

class GP_Login extends Component {
  constructor(props){
    super(props);
    this.state ={
      room: '',
      user: '',
      avatar_name: '',
      avatar_image: '',
      avatar_color: '',
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        room: this.props.room,
        user: this.props.user,
        avatar_name: this.props.avatar_name,
        avatar_image: this.props.avatar_image,
        avatar_color: this.props.avatar_color,
      })
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
  selectAvatar  = (item) => {
    console.log('selectAvatar clicked')
    console.log('item is',item);
    console.log('item[0] is',item[0], typeof item[0]);
    this.setState({
      avatar_name: item[0],
      avatar_image: item[1],
      avatar_color: item[2]
    })
  }
  logState = () => {
    console.log(this.state);
  }
  render() {
    const {user, room} = this.state;
    console.log('GPLogin, state', this.state)
    return (
      <div>
        <h1>Guest Login</h1>
        <button onClick={this.logState}>Guest Login State</button>
        <h2>Room Name:</h2>
        <input type="text" name={'room'} value={room} onChange={this.handleChange}/> 
        <h2>User:</h2>
        <input type="text" name={'user'} value={user} onChange={this.handleChange}/> 
        <button onClick={this.handleSubmit}>Submit</button>
        <GPLobby selectAvatar={this.selectAvatar}/>
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