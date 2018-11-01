import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import './App.css';
const socket = socketIOClient("http://192.168.1.5:4000/");

class App extends Component {
  
  render() {
    return (
      <div className="App">
      <h1>App</h1>
      </div>
    );
  }
}

export default App;