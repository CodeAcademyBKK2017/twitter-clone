import './App.css';
import React, {Component} from 'react';
import Header from './components/Header/Header.component';

class App extends Component {
  render () {
    return (
      <div >
        <Header />
        <div className='body'>
          <div className='stat'>stat</div>
          <div className='feed'>feed</div>
        </div>
      </div>
    );
  }
}

export default App;
