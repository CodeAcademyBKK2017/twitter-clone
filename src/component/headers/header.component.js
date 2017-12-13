import './header.style.css';
import React, {Component} from 'react';
import {Icon} from 'react-fa';

class Header extends Component {
  render () {
    return (
      <div className="headerTwit shadowStyle" >
        <div className="leftContain">
          <div className="leftConLogo"><Icon name='twitter' className='logoLeft' /></div>
        </div>
        <div className="ConLogo"><Icon name='twitter' className="Logo" size='2x'/></div>
        <div className="rightContain">
        RIGHT
        </div>
      </div>
    );
  }
}

export default Header;
