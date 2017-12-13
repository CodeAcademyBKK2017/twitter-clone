import './Header.style.css';
import React, {Component} from 'react';
import {Icon} from 'react-fa';
class Header extends Component {
  render () {
    return (
      <div className="app-header shadow white-box" >
        <div className="left-content"> left content</div>
        <div className="logo"> <Icon name='twitter' size='2x'  /></div>
        <div className="right-content"> right content</div>
      </div>
    );
  }
}
export default Header;