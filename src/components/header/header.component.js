import AppStyles from '../../App.css';
import HeaderStyles from './Header.css';
import React, {Component} from 'react';
import Circle from '../Circle/Circle.component';
import Search from '../Search/Search.component';
import Icon from 'react-ionicons';

class Header extends Component {

  render () {
    return (
      <div className={`${HeaderStyles.header} ${AppStyles.panel}`}>
        <div className={HeaderStyles.leftContainer}>
          <div className={HeaderStyles.brand}>
            <Circle iconName="logo-twitter" opaque={true} />
          </div>
          <ul className={HeaderStyles.nav}>
            <li><Circle iconName="ios-notifications-outline" /></li>
            <li><Circle iconName="ios-mail-outline" /></li>
            <li className={HeaderStyles.active}><Circle iconName="ios-grid-outline" /></li>
          </ul>
        </div>
        <div className={`${HeaderStyles.logoContainer} ${AppStyles.textCenter}`}>
          <Icon icon="logo-twitter" fontSize="35px" color="#80A8CC" />
        </div>
        <div className={HeaderStyles.rightContainer}>
          <Search />
          <div className={HeaderStyles.profile}>
            <Circle><img src="http://icons.iconarchive.com/icons/designbolts/despicable-me-2/128/Minion-Dancing-icon.png" width="24" height="24" /></Circle>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
