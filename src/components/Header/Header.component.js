import './Header.css';
import React, {Component} from 'react';

class Header extends Component {
  render () {
    return (
      <div className="header box-shadow background-white">
        <div className="left-head"/>
        <div className="center-head"/>
        <div className="right-head"/>
      </div>
    );
  }
}

export default Header;
