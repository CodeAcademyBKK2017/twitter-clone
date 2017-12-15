import React, {Component} from 'react';
import classNames from 'classnames';
import headerStyle from './Header.style.css';
import Ionicon from 'react-ionicons';
import Circle from '../Circle/Circle.component';
import Search from '../Search/Search.component';

class Header extends Component {
  state = {
    menuVisibility: false
  }
  toggleMenu = () => {
    this.setState({menuVisibility: !this.state.menuVisibility});
  }
  render () {
    return (
      <div>
        <div className={classNames(headerStyle.headerMobile)}>
          <div onClick={this.toggleMenu} className={classNames(headerStyle.headerMobile__menuIconContainer)}>
            <Ionicon icon="ios-menu" fontSize="22px" color="darkgray" className={classNames(headerStyle.headerMobile__menuIcon)} />
          </div>
          <div className={classNames(headerStyle.headerMobile__logoContainer)}>
            <Ionicon icon="logo-twitter" fontSize="35px" color="#81a9cb" />
          </div>
        </div>
        <div className={classNames(headerStyle.header)}>
          <div className={classNames(headerStyle.left)}>
            <div className={classNames(headerStyle.circleContainer, headerStyle.circleContainer__first, headerStyle.circleContainer__borderRight)}>
              <Circle iconName="logo-twitter" type="brand" />
            </div>
            <div className={classNames(headerStyle.circleContainer)}>
              <Circle iconName="ios-notifications-outline" />
            </div>
            <div className={classNames(headerStyle.circleContainer)}>
              <Circle iconName="ios-mail-outline" />
            </div>
            <div className={classNames(headerStyle.circleContainer, headerStyle.active)}>
              <Circle iconName="ios-globe" />
            </div>
          </div>
          <div className={classNames(headerStyle.logo)}><Ionicon icon="logo-twitter" fontSize="35px" color="#81a9cb" /></div>
          <div className={classNames(headerStyle.right)}>
            <Search />
            <div className={classNames(headerStyle.circleContainer, headerStyle.circleContainer__user)}>
              <Circle iconName="ios-ionitron-outline" />
            </div>
          </div>
        </div>
        <div className={classNames(headerStyle.sideMenu__panel, {[headerStyle.offScreen]: !this.state.menuVisibility})}>
          <Search />
          <div className={classNames(headerStyle.sideMenu__name)}>
            Teeraphong Chaichalermpreecha
          </div>
        </div>
      </div>
    );
  }
}

export default Header;