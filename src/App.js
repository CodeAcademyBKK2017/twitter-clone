import './App.css';
import React, {Component} from 'react';
// import {Icon} from 'react-fa';

class App extends Component {
  render () {
    return (
      <div className="main-app">
        <div className="header box-shadow background-white">
          <div className="left-head"/>
          <div className="center-head"/>
          <div className="right-head"/>
        </div>
        <div className="box-main">
          <div className="second-container box-shadow background-white"/>
          <div className="content box-shadow background-white"/>
        </div>
      </div>
    );
  }
}

export default App;
