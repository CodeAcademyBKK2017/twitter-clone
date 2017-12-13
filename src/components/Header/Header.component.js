import './Header.style.css';
import React, {Component} from 'react';
import Circle from '../Circle/Circle.component';
import {Icon} from 'react-fa';
class Header extends Component {
  render () {
    return (
      <div className="app-header shadow white-box" >
        <div className="before-left"  > <Circle color="twitter"><Icon name='twitter' /></Circle></div>
        <div className="left-content"> 
          <Circle color="" margin="margin"><Icon name='bell-o' /></Circle>
          <Circle color="" margin="margin"><Icon name='envelope-o' /></Circle>
          <Circle color="" margin="margin"><Icon name='hashtag' /></Circle>
        </div>
        <div className="logo"> <Icon name='twitter' size='2x'  /></div>
        <div className="right-content">
          <Circle ><image /></Circle>
        </div>
      </div>
    );
  }
}
export default Header;