import headerStyle from './Header.css';
import React, {Component} from 'react';
import {Icon} from 'react-fa';
import Circle from '../Circle/Circle.component';
import classNames from 'classnames';

class Header extends Component {
  render () {
    return (
      <div className={classNames(headerStyle.header, headerStyle.box_shadow, headerStyle.background_white)}>
        <div className={headerStyle.left_head}>
          <div className={headerStyle.head_first_icon}>
            <Circle circle="circle background-sky">
              <Icon name="twitter" />
            </Circle>
          </div>
          <div className={headerStyle.head_second_icon}>
            <Circle circle="circle">
              <Icon name="bell-o" />
            </Circle>
            <Circle circle="circle">
              <Icon name="envelope-o" />
            </Circle>
            <Circle circle="circle">
              <Icon name="hashtag" />
            </Circle>
          </div>
        </div>
        <div className={headerStyle.center_head}>
          <Circle circle="">
            <Icon name="twitter" size="2x"/>
          </Circle>
        </div>
        <div className={headerStyle.right_head}>
          <div className={headerStyle.right_head_text}>
            <input type="text"/>
            <Icon name="search"/>
          </div>
          <div className={headerStyle.right_head_icon}>
            <Circle circle="circle">
              <Icon name="user-o" />
            </Circle>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

