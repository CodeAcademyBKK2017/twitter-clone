import '../../App.css';
import React, {Component} from 'react';
import {Icon} from 'react-fa';

class Header extends Component {

  render () {
    return (
      <div className="header panel">
        <div className="left-content">
          <Icon name="twitter" />
        </div>
        <div className="logo">
          <Icon name="twitter" className="logo" />
        </div>
        <div className="right-content">
          <Icon name="search" />
        </div>
      </div>
    );
  }

}

export default Header;
