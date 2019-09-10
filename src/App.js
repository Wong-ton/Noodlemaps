import React, { Component } from 'react';
import './App.css';
import Home from './Home';

class App extends Component {

  state = {
    loading: null,
    error: null,
  }


  render(){
    return (
      <div>
        <h1>NoodleMAPS</h1>
        <br/>
        <Home/>
      </div>
    );
  }
}

export default App;
