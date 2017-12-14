import AppStyles from './App.css';
import React, {Component} from 'react';
import Header from './components/Header/Header.component';

class App extends Component {

  render () {
    
    return (
      <div>
        <Header />
        <div className={AppStyles.container}>
          <div className={`${AppStyles.menu} ${AppStyles.panel}`} />
          <div className={`${AppStyles.content} ${AppStyles.panel}`} />
        </div>
      </div>
    );
  }

}

export default App;
