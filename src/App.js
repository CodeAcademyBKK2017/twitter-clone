import AppStyles from './App.css';
import React, {Component} from 'react';
import Header from './components/Header/Header.component';
import Tab from './components/Tab/Tab.component';

class App extends Component {

  render () {
    
    return (
      <div>
        <Header />
        <div className={AppStyles.container}>
          <Tab />
          <div className={`${AppStyles.content} ${AppStyles.panel}`} />
        </div>
      </div>
    );
  }

}

export default App;
