import './App.css';
import React, {Component} from 'react';
import Header from './components/Header/Header.component';

class App extends Component {

  render () {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="menu panel" />
          <div className="content panel" />
        </div>
      </div>
    );
  }

}

export default App;
