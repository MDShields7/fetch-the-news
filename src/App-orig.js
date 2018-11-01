import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
// import {updateRoom, updateUser} from '../../ducks/reducer'
// import routes from './routes'
import HLogin from './components/Host_Nav/H_Login'
import HNav from './components/Host_Nav/H_Nav'
import HPNav from './components/Host_Party_Nav/HP_Nav'
import GPLogin from './components/Guest_Party_Nav/GP_Login'
import GPNav from './components/Guest_Party_Nav/GP_Nav'


class App extends Component {
constructor(props){
  super(props);
  this.state ={
    room: '',
    user: '',
    userList: [],
    host: '',
  }
}
componentDidMount(){

}
componentDidUpdate(prevProps) {
  if (this.props !== prevProps) {
    this.setState({
      room: this.props.room,
      host: this.props.host,
    })
  }
}
stateBtn = () => {
  console.log(this.state);
}

  render() {
    // console.log('App.js, props',this.props)
    console.log('App.js, state',this.state)
    const {room, host, user, userList} = this.state;
    //HOST VIEW FLOW
    const hostView = () => {
      if(!host){
        return <HLogin/>
      } else if ( host && !room ) {
        return <HNav/>   
      }  else if (host && room) {
      return <HPNav/>
      }
    };
    // GUEST (user) VIEW FLOW
    const guestView = (() => {
      if (!room) {
      return <GPLogin/>   
       } else if ( room && user ) {
      return <GPNav/>
      }
    });
    return (
      <div className="App">
        <div>`Host is ${this.props.host}`</div> 
        <div>`Room is ${this.props.room}`</div>
        <button onClick={this.stateBtn}>Check App.js State</button>
        <div className='Laptop'>{hostView()}</div>
        <div className='Phone'>{guestView()}</div>
      </div>
    );
  }
}
function mapStateToProps( state ){
  const {room, host} = state;
  return {
      room,
      host
  };
}

export default connect (mapStateToProps)(App); 