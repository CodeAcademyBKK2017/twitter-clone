import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Header.style.css';

class Header extends Component {
  render () {
    return (
      <div className='header'>
        <div className='header--left'>left</div>
        <div className='header--logo' />
        <div className='header--right'>right</div>
      </div>
    );
  }
}

export default Header;