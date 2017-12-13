import './App.css';
import Header from './Component/Header/Header';
import Body from './Component/Body/Body';
import React, {Component} from 'react';
import {Icon} from 'react-fa';

class App extends Component {
  render () {
    return (
      <div className='App'>

       <Header/>
       <Body/>
        
      </div>  
    );
  }
}

export default App;
