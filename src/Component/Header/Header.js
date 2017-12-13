import './Header.css';
import Circle from '../Circle/Circle'
import React, {Component} from 'react';
import {Icon} from 'react-fa';

class Header extends Component {
  render () {
    return (     
        <div className='Box-Header shadow box-bg'>
          <div className='Header4'><Circle name='twitter'/></div>
          <div className='Header1'><Icon size='2x' className='logo' name="twitter"/></div>
          <div className='Header4'>c</div>        
        </div>      
    );
  }
}

export default Header;
