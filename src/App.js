import classNames from 'classnames';
import appStyle from './App.css';
import './Test.css';
import React, {Component} from 'react';
import Header from './components/Header/Header.component';

class App extends Component {
  render () {
    return (
      <div >
        <p className='test'>TEST</p>
        <Header />
        <div className={classNames(appStyle.body)}>
          <div className={classNames(appStyle.stat)}>stat</div>
          <div className={classNames(appStyle.feed)}>feed</div>
        </div>
      </div>
    );
  }
}

export default App;
