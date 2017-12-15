import classNames from 'classnames';
import appStyle from './App.css';
import React, {Component} from 'react';
import Header from './components/Header/Header.component';
import Stats from './components/Stats/Stats.component';

class App extends Component {
  render () {
    return (
      <div >
        <Header />
        <div className={classNames(appStyle.body)}>
          <div className={classNames(appStyle.stat)}><Stats /></div>
          <div className={classNames(appStyle.feed)} />
        </div>
      </div>
    );
  }
}

export default App;
