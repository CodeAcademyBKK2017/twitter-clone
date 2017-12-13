import './App.css';
import React, {Component} from 'react';

class App extends Component {
  render () {
    return (
      <div >
        <div className='App-header'>
          <div className='App-title'>App-header</div>
        </div>
        <div className='App-body'>
          <div className='Stat'>Stat</div>
          <div className='Feed'>Feed</div>
        </div>
      </div>
    );
  }
}

export default App;
