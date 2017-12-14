import './App.css';
import inputStyles from './App.css';
import React, {Component} from 'react';
import Header from './Component/Header/Header.component';
import classNames from 'classname';

class App extends Component {
  render () {
    return (
      <div className='App'>

        <Header />
      
        <div className={inputStyles.Box}>
          <div className={classNames(inputStyles.BoxTitle, inputStyles.Shadow)}/>
          <div className={classNames(inputStyles.BoxContent, inputStyles.Shadow)}/>
        </div>
              
      </div>
    );
  }
}

export default App;
