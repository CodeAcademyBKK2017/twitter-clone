import './App.css';
import React, {Component} from 'react';
import Header from './components/Header/Header.component';
class App extends Component {
  render () {
    return (
      <div className="app">
        <Header/>
        <div className="app-body">
          <div className="app-header2 shadow white-box" /> 
          <div className="app-body2 shadow white-box"/>
        </div>
      </div>
    );
  }
}
export default App;
