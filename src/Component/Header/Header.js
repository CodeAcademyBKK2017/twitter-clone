import './Header.css';
import Circle from '../Circle/Circle'
import InputBorder from '../InputBorder/InputBorder'
import React, {Component} from 'react';
import {Icon} from 'react-fa';

class Header extends Component {
  render () {
    return (     
        <div className='Box-Header shadow box-bg'>
          <div className='HeaderLeft'>
            <div className="BoxLogoBrand">
                <Circle isBrand={true} name='twitter'/>
            </div>
            <Circle name='bell-o'/>
            <Circle name='envelope-o'/>
            <Circle name='hashtag'/>
        </div>
          
          <div className='HeaderLogo'><Icon size='2x' className='logo' name="twitter"/></div>
          <div className='HeaderRight'>
          <InputBorder />
          </div>        
        </div>      
    );
  }
}

export default Header;
