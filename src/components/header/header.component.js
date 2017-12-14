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
          <ul className="nav">
            <li className="active"><Circle iconName="bell-o" /></li>
            <li><Circle iconName="envelope-o" /></li>
            <li><Circle iconName="hashtag" /></li>
          </ul>
        </div>
        <div className="logo-container text-center">
          <Icon name="twitter" className="logo" size="2x" />
        </div>
        <div className="right-content">
          <div className="search">
            <input name="search" placeholder="Search" />
            <Icon name="search" />
          </div>
          <div className="profile">
            <Circle><img src="http://icons.iconarchive.com/icons/designbolts/despicable-me-2/128/Minion-Dancing-icon.png" width="24" height="24" /></Circle>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
