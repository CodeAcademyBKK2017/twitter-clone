import AppStyles from '../../App.css';
import TabStyles from './Tab.css';
import React, {Component} from 'react';

class Tab extends Component {

  render () {
    
    return (
      <div className={`${TabStyles.tab} ${AppStyles.panel}`}>
        <div className={`${TabStyles.tabItem} ${TabStyles.active} ${AppStyles.textCenter}`}>
          <h3>TWEETS</h3>
          <p>200</p>
        </div>
        <div className={`${TabStyles.tabItem} ${AppStyles.textCenter}`}>
          <h3>PHOTOS/VIDEOS</h3>
          <p>200</p>
        </div>
        <div className={`${TabStyles.tabItem} ${AppStyles.textCenter}`}>
          <h3>FOLLOWING</h3>
          <p>200</p>
        </div>
        <div className={`${TabStyles.tabItem} ${AppStyles.textCenter}`}>
          <h3>FOLLOWERS</h3>
          <p>200</p>
        </div>
      </div>
    );
  }

}

export default Tab;


