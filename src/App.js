import './App.css';
import React, {Component} from 'react';
import {Icon} from 'react-fa';
import Header from './component/headers/header.component'

class App extends Component {
  render () {
    return (
      <div className="BodyTwit">
        <Header />
        <div className="container" >
          <div className="BoxContain" >
            <div className="menubar shadowStyle" />
            <div className="TwitterBody shadowStyle" /> 
          </div>
        </div>
      </div>
    );
  }
}

export default App;
