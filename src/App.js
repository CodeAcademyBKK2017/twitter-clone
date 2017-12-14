import './App.css';
import React, {Component} from 'react';
import Header from './Component/Header/Header.component';
import Box from './Component/Box/Box.component';

class App extends Component {
  render () {
    return (
      <div className='App'>

        <Header />
      
        <Box />
              
      </div>
    );
  }
}

export default App;
