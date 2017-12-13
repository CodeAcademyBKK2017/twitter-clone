import './Header.css';
import React, {Component} from 'react';
import Circle from '../Circle/Circle.component';
import {Icon} from 'react-fa';

class Header extends Component {

  render () {
    return (
      <div className="header panel">
        <div className="left-content">
          <div className="brand">
            <Circle iconName="twitter" opaque={true} />
          </div>
        </div>
        <div className="logo-container text-center">
          <Icon name="twitter" className="logo" size="2x" />
        </div>
        <div className="right-content text-right">
          <Icon name="search" />
        </div>
      </div>
    );
  }
}

export default Header;
