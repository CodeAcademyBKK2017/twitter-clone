import appStyle from './App.css';
import React, {Component} from 'react';
import Header from './components/Header/Header.component';
class App extends Component {
  render () {
    return (
      <div className={appStyle.app}>
        <Header/>
        <div className={appStyle.appBody}>
          <div className={`${appStyle.header2} ${appStyle.shadow} ${appStyle.whiteBox}`} /> 
          <div className={`${appStyle.appBody2} ${appStyle.shadow} ${appStyle.whiteBox}`}/>
        </div>
      </div>
    );
  }
}
export default App;
