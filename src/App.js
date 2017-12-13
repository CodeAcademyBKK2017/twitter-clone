import './App.css';
import React, {Component} from 'react';
import {Icon} from 'react-fa';

class App extends Component {

  render () {
    return (
      <div>
        <div className="header">
          <Icon name="twitter" />
        </div>
        <div className="container">
          <div className="menu" />
          <div className="content" />
        </div>
      </div>
    );
  }

}

export default App;
