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
      <div id="cover">
        <h1>NoodleMAPS</h1>
        <br/>
        <Home/>
        <div className="content">
          Send noods
        </div>
      </div>
    );
  }
}

export default App;
