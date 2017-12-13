import './Header.style.css';
import React, {Component} from 'react';
import Circle from '../Circle/Circle.component';
import {Icon} from 'react-fa';
import Search from '../Search/Search.component';
class Header extends Component {
  render () {
    return (
      <div className="app-header shadow white-box" >
        <div className="before-left"> <Circle color="twitter"><Icon name='twitter' /></Circle></div>
        <div className="left-content"> 
          <Circle color="" margin="margin-l"><Icon name='bell-o' /></Circle>
          <Circle color="" margin="margin-l"><Icon name='envelope-o' /></Circle>
          <Circle color="" margin="margin-l"><Icon name='hashtag' /></Circle>
        </div>
        <div className="logo"> <Icon name='twitter' size='2x'  /></div>
        <div className="right-content">
          <Search/>
          <Circle margin="margin-rl"><img src="http://icons.iconarchive.com/icons/designbolts/despicable-me-2/32/Minion-Amazed-icon.png"/></Circle>
        </div>
      </div>
    );
  }
}
export default Header;