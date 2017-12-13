import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Header.style.css';
import {Icon} from 'react-fa';

class Header extends Component {
  render () {
    return (
      <div className='header'>
        <div className='header--left'>left</div>
        <div className='header--logo'><Icon name="twitter" size="2x" color="#80A8CC" /></div>
        <div className='header--right'>right</div>
      </div>
    );
  }
}

export default Header;