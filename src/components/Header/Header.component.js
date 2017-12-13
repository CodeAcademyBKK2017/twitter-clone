import './Header.css';
import React, {Component} from 'react';
import {Icon} from 'react-fa';

class Header extends Component {
  render () {
    return (
      <div className="header box-shadow background-white">
        <div className="left-head"/>
        <div className="center-head">
          <Icon name="twitter" size="2x"/>
        </div>
        <div className="right-head"/>
      </div>
    );
  }
}

export default Header;
