import './App.css';
import React, {Component} from 'react';
import {Icon} from 'react-fa';

class App extends Component {
  render () {
    return (
      <div className="app">
        <div className="app-header" />
        <div className="app-body">
          <div className="app-header2" /> 
          <div className="app-body2"/>
        </div>
      </div>
    );
  }
}
/* <div > hello world <Icon name='rocket' /></div> */ 
export default App;
