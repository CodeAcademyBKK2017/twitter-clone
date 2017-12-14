import React, {Component} from 'react';
import classNames from 'classnames';
import headerStyle from './Header.style.css';
import Ionicon from 'react-ionicons';
import Circle from '../Circle/Circle.component';
import Search from '../Search/Search.component';

class Header extends Component {
  render () {
    return (
      <div className={classNames(headerStyle.header)}>
        <div className={classNames(headerStyle.left)}>
          <div className={classNames(headerStyle.circleContainer, headerStyle.circleContainer__first, headerStyle.circleContainer__borderRight)}>
            <Circle iconName="ion-social-twitter-outline" type="brand" />
          </div>
          <div className={classNames(headerStyle.circleContainer)}>
            <Circle iconName="ios-notifications-outline" />
          </div>
          <div className={classNames(headerStyle.circleContainer)}>
            <Circle iconName="ios-mail-outline" />
          </div>
          <div className={classNames(headerStyle.circleContainer, headerStyle.circleContainer__borderBottom)}>
            <Circle iconName="ion-android-globe" />
          </div>
        </div>
        <div className={classNames(headerStyle.logo)}><Ionicon icon="logo-twitter" fontSize="35px" color="#81a9cb" /></div>
        <div className={classNames(headerStyle.right)}>
          <Search />
          <div className={classNames(headerStyle.circleContainer, headerStyle.circleContainer__user)}>
            <Circle iconName="ion-android-person" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;