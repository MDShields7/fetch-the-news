import React, { Component } from 'react'
// import {connect} from 'react-redux'
// import {updateRoom, updateUser} from '../../ducks/reducer'

export default class GP_Login extends Component {
  constructor(){
    super();
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
  render() {
    const {user, room} = this.state;
    return (
      <div>
        <h1>Guest Login</h1>
        <h2>Room:</h2>
        <input type="text" name={'room'} value={room} onChange={this.handleChange}/> 
        <h2>User:</h2>
        <input type="text" name={'user'} value={user} onChange={this.handleChange}/> 
      </div>
    )
  }
}
// function mapStateToProps( state ){
//   const {room, room} = state;
//   return {
//       room,
//       user
//   };
// }


// export default connect (mapStateToProps, {updateRoom, updateUser})(GP_Login); 

