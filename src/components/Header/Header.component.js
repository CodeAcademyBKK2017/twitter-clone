import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Header.style.css';
import {Icon} from 'react-fa';
import Circle from '../Circle/Circle.component';

class Header extends Component {
  render () {
    return (
      <div className='header'>
        <div className='header--left'>
          <div className="circle-container circle-container__first circle-container__border-right">
            <Circle iconName="twitter" colorStyle="blue" />
          </div>
          <div className="circle-container">
            <Circle iconName="bell-o" />
          </div>
          <div className="circle-container">
            <Circle iconName="envelope-o" />
          </div>
          <div className="circle-container circle-container__border-bottom">
            <Circle iconName="hashtag" />
          </div>
        </div>
        <div className='header--logo'><Icon name="twitter" size="2x" /></div>
        <div className='header--right'>right</div>
      </div>
    );
  }
}

export default Header;