import './App.css';
import React, {Component} from 'react';
import {Icon} from 'react-fa';

class App extends Component {
  render () {
    return (
      <div className="app">
        <div className="app-header shadow white-box" >
          <div className="left-content"> left content</div>
          <div className="logo"> <Icon name='twitter' /></div>
          <div className="right-content"> right content</div>
        </div>
        <div className="app-body">
          <div className="app-header2 shadow white-box" /> 
          <div className="app-body2 shadow white-box"/>
        </div>
      </div>
    );
  }
}
export default App;
