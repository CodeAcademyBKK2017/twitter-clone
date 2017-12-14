import React, {Component} from 'react';
import classNames from 'classnames';
import headerStyle from './Header.style.css';
import {Icon} from 'react-fa';
import Circle from '../Circle/Circle.component';
import Search from '../Search/Search.component';

class Header extends Component {
  render () {
    return (
      <div className={classNames(headerStyle.header)}>
        <div className={classNames(headerStyle.left)}>
          <div className={classNames(headerStyle.circleContainer, headerStyle.circleContainer__first, headerStyle.circleContainer__borderRight)}>
            <Circle iconName="twitter" type="brand" />
          </div>
          <div className={classNames(headerStyle.circleContainer)}>
            <Circle iconName="bell-o" />
          </div>
          <div className={classNames(headerStyle.circleContainer)}>
            <Circle iconName="envelope-o" />
          </div>
          <div className={classNames(headerStyle.circleContainer, headerStyle.circleContainer__borderBottom)}>
            <Circle iconName="hashtag" />
          </div>
        </div>
        <div className={classNames(headerStyle.logo)}><Icon name="twitter" size="2x" /></div>
        <div className={classNames(headerStyle.right)}>
          <Search />
          <div className={classNames(headerStyle.circleContainer, headerStyle.circleContainer__user)}>
            <Circle iconName="user-o" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;