import React, { Component } from 'react';

import H_Nav from './components/Host_Nav/H_Nav'
import './App.css';



class App extends Component {
constructor(){
  super();
  this.state ={
    room = '',
    host = false,
    user = false,
    userList = [],
  }
}


  render() {

    // HOST VIEW FLOW
    const hostView = () => {
      if(!host){
        return (<H-Login/>)
      } else if ( host && !room ) {
        return (<H-Nav/>)   
      }  else if (host && room) {
      return (<HP-Nav/>)}
    };
    // GUEST (user) VIEW FLOW
    const guestView = () => {
      if (room) {
      return (<G-Login/>)   
       } else if ( room && user ) {
      return (<G-Nav/>)
    };


    return (
      <div className="App">

        <div className='Laptop'>
            {hostView}
        </div>

        <div className=>
            {guestView}
        </div>
      </div>
    );
  }
}

export default App;
