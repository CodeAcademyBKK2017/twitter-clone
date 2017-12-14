import AppCss from './App.css';
import React, {Component} from 'react';
import Header from './component/headers/header.component';

class App extends Component {
  render () {
    return (
      <div className={AppCss.BodyTwit}>
        <Header />
        <div className={AppCss.container}>
          <div className={`${AppCss.BoxContain}`} >
            <div className={`${AppCss.menubar}  ${AppCss.shadowStyle}`} />
            <div className={`${AppCss.TwitterBody} ${AppCss.shadowStyle}`} /> 
          </div>
        </div>
      </div>
    );
  }
}

export default App;
