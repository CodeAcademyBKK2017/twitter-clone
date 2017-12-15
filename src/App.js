import appStyle from './App.css';
import React, {Component} from 'react';
import Header from './components/Header/Header.component';
import Tapbar from './components/TapBar/TapBar.component';
import classNames from 'classnames';
// import {Icon} from 'react-fa'; 

class App extends Component {
  render () {
    return (
      <div className={appStyle.main_app}>
        <Header/>
        <div className={appStyle.box_main}>
          <Tapbar/>
          <div className={classNames(appStyle.content, appStyle.box_shadow, appStyle.background_white)}/>
        </div>
      </div>
    );
  }
}

export default App;
