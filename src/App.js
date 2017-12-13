import './App.css';
import React, {Component} from 'react';
import {Icon} from 'react-fa';

class App extends Component {
  render () {
    return (
      <div className="BodyTwit">
        <div className="headerTwit shadowStyle" >
          <div className="ConLogo"><Icon name='twitter' className="Logo"/></div>
        </div>
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
