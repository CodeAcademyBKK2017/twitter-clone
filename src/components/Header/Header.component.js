import headerStyle from './Header.css';
import circleStyle from '../Circle/Circle.css';
import React, {Component} from 'react';
import Icon from 'react-ionicons';
import Circle from '../Circle/Circle.component';
import classNames from 'classnames';


class Header extends Component {
  render () {
    return (
      <div className={classNames(headerStyle.header, headerStyle.box_shadow, headerStyle.background_white)}>
        <div className={headerStyle.left_head}>
          <div className={headerStyle.head_first_icon}>
            <Circle circle={classNames(circleStyle.circle, circleStyle.background_sky)}>
              <Icon icon="logo-twitter" fontSize="30px" color="white"/>
            </Circle>
          </div>
          <div className={headerStyle.head_second_icon}>
            <div>
              <Circle circle={circleStyle.circle}>
                <Icon icon="ios-notifications-outline" fontSize="30px"/>
              </Circle>
            </div>
            <Circle circle={circleStyle.circle}>
              <Icon icon="ios-mail-outline" fontSize="30px"/>
            </Circle>
            <Circle circle={circleStyle.circle}>
              <Icon icon="ios-grid-outline" fontSize="30px"/>
            </Circle>
          </div>
        </div>
        <div className={headerStyle.center_head}>
          <Circle circle="">
            <Icon icon="logo-twitter" fontSize="30px" color="#80A8CC"/>
          </Circle>
        </div>
        <div className={headerStyle.right_head}>
          <div className={headerStyle.right_head_text}>
            <input type="text"/>
            <Icon icon="ios-search-outline"/>
          </div>
          <div className={headerStyle.right_head_icon}>
            <Circle circle={circleStyle.circle}>
              <Icon icon="logo-github" fontSize="30px"/>
            </Circle>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

