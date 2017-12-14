import headerStyles from './Header.style.css';
import React, {Component} from 'react';
import Circle from '../Circle/Circle.component';
import {Icon} from 'react-fa';
import Search from '../Search/Search.component';
class Header extends Component {
  render () {
    return (
      <div className={headerStyles.appHeader} >
        <div className={headerStyles.leftContent}> 
          <div className={headerStyles.beforeLeft}> <Circle color="twitter"><Icon name='twitter' /></Circle></div>
          <Circle color="" margin="margin-l"><Icon name='bell-o' /></Circle>
          <Circle color="" margin="margin-l"><Icon name='envelope-o' /></Circle>
          <Circle color="" margin="margin-l"><Icon name='hashtag' /></Circle>
        </div>
        <div className={headerStyles.logo}> <Icon name='twitter' size='2x'  /></div>
        <div className={headerStyles.rightContent}>
          <Search/>
          <Circle margin="margin-rl"><img src="http://icons.iconarchive.com/icons/designbolts/despicable-me-2/32/Minion-Amazed-icon.png"/></Circle>
        </div>
      </div>
    );
  }
}
export default Header;