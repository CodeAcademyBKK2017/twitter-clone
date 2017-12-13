import './Header.css';
import React, {Component} from 'react';
import {Icon} from 'react-fa';

class Header extends Component {
  render () {
    return (
      <div className='Header Shadow'>
        <div className='Flex-glow4'/>
        <div className='Flex-glow1'><Icon name='twitter'/></div>
        <div className='Flex-glow4'/>
      </div>
    );
  }
}

export default Header;
