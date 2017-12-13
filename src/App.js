import './App.css';
import React, {Component} from 'react';
import {Icon} from 'react-fa';

class App extends Component {
  render () {
    return (
      <div className="BodyTwit">
        <div className="headerTwit" />
        <div className="container" >
          <div className="BoxContain" >
            <div className="menubar" />
            <div className="TwitterBody" /> 
          </div>
        </div>
      </div>
    );
  }
}

export default App;
