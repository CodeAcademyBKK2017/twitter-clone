import './Header.css';
import React, {Component} from 'react';
import {Icon} from 'react-fa';
import Circle from '../Circle/Circle.component';

class Header extends Component {
  render () {
    return (
      <div className="header box-shadow background-white">
        <div className="left-head">
          <div className="head-first-icon">
            <Circle circle="circle background-sky">
              <Icon name="twitter" />
            </Circle>
          </div>
          <div className="head-second-icon">
            <Circle circle="circle">
              <Icon name="bell-o" />
            </Circle>
            <Circle circle="circle">
              <Icon name="envelope-o" />
            </Circle>
            <Circle circle="circle">
              <Icon name="hashtag" />
            </Circle>
          </div>
        </div>
        <div className="center-head">
          <Circle circle="">
            <Icon name="twitter" size="2x"/>
          </Circle>
        </div>
        <div className="right-head">
          <div className="right-head-text">
            <input type="text"/>
            <Icon name="search"/>
          </div>
          <div className="right-head-icon">
            <Circle circle="circle">
              <Icon name="user-o" />
            </Circle>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
