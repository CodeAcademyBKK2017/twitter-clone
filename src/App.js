import './App.css';
import React, {Component} from 'react';
import Header from './components/Header/Header.component';
// import {Icon} from 'react-fa';

class App extends Component {
  render () {
    return (
      <div className="main-app">
        <Header/>
        <div className="box-main">
          <div className="second-container box-shadow background-white"/>
          <div className="content box-shadow background-white"/>
        </div>
      </div>
    );
  }
}

export default App;
