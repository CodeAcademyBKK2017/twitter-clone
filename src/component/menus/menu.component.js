import React, {Component} from 'react';
import className from 'classname';
import ProptTypes from 'prop-types';
import MenuCss from './menu.style.css';
import AppCss from '../../App.css';

class Menu extends Component {
  render () {
    const {text, num} = this.props;
    return (
      <div className={className(MenuCss.menu, AppCss.Center, AppCss.isFlex)}>
        <h4 className={className(MenuCss.textHead)}>{text}</h4>
        <p>{num}</p>
      </div>
    );
  }
}

Menu.propTypes = {
  text: ProptTypes.string.isRequired,
  num: ProptTypes.string.isRequired
};
  
Menu.defaultProps = {
  text: '',
  num: ''
};

export default Menu;
