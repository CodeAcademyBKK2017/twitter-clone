import './App.css';
import React, {Component} from 'react';
import Header from './Component/Header/Header.component';

class App extends Component {
  render () {
    return (
      <div className='App'>

        <Header />
      
        <div className='Box'>
          <div className='Box-title Shadow'/>
          <div className='Box-content Shadow'/>
        </div>
              
      </div>
    );
  }
}

export default App;
