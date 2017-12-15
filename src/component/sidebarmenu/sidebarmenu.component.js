import React, {Component} from 'react';
import className from 'classname';
import SideCss from './sidebarmenu.style.css';
import AppCss from '../../App.css';
import ProptTypes from 'prop-types';

class SideMenu extends Component {
  render () {
    const {showHide} = this.props;
    return (
      <div className={className(SideCss.barSide, {[SideCss.barSideHide]: showHide}, AppCss.shadowStyle)}>
        <div className={className(SideCss.barContant, AppCss.isFlex, AppCss.Center)}>
          <div>
            {this.props.children}
          </div>
        </div>
        <div className={className(SideCss.footer)}>
            Made By Kingdark
        </div>
      </div>
    );
  }
}

SideMenu.propTypes = {
  children: ProptTypes.object.isRequired,
  showHide: ProptTypes.bool.isRequired
};
  
SideMenu.defaultProps = {
  children: null,
  showHide: false
};
  

export default SideMenu;
