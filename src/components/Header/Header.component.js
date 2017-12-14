import headerStyles from './Header.style.css';
import React, {Component} from 'react';
import Circle from '../Circle/Circle.component';
import Icon from 'react-ionicons';
import Search from '../Search/Search.component';
class Header extends Component {
  render () {
    return (
      <div className={headerStyles.appHeader} >
        <div className={headerStyles.leftContent}> 
          <div className={headerStyles.beforeLeft}> 
            <Circle type="twitter"><Icon icon='logo-twitter' fonSize="35px" color="white" /></Circle>
          </div>
          <Circle type="normalL"><Icon icon='ios-notifications-outline' /></Circle>
          <Circle type="normalL"><Icon icon='ios-mail-outline' /></Circle>
          <Circle type="normalL"><Icon icon='ios-pricetag' /></Circle>
        </div>
        <div className={headerStyles.logo}> <Icon icon='logo-twitter' fonSize='35px' color="#00aced"  /></div>
        <div className={headerStyles.rightContent}>
          <Search/>
          <Circle type="normalRL"><img src="http://icons.iconarchive.com/icons/designbolts/despicable-me-2/32/Minion-Amazed-icon.png"/></Circle>
        </div>
      </div>
    );
  }
}
export default Header;