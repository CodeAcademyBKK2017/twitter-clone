import inputStyles from './Header.css';
import React, {Component} from 'react';
import CircleBG from '../Circle/CircleBG.component';
import CircleNoneBG from '../Circle/CircleNoneBG.component';
import InputBorder from '../InputBorder/InputBorder.component';
import {Icon} from 'react-fa';
import className from 'classname';

class Header extends Component {
  render () {
    return (
      <div className={className(inputStyles.header, inputStyles.shadow)}>

        <div className={className(inputStyles.flex4, inputStyles.contentLeft)}>
          <CircleBG iconName={'twitter'} color='#80A8CC'/>
          <div className={inputStyles.divide}/>
          <CircleNoneBG iconName={'bell-o'}/>
          <CircleNoneBG iconName={'envelope-o'}/>
          <CircleNoneBG iconName={'hashtag'}/>
        </div>

        <div className={inputStyles.flex1}><Icon className={inputStyles.iconLogo} size='2x' name='twitter'/></div>

        <div className={className(inputStyles.flex4, inputStyles.contentRight)}>
          <InputBorder />
          <CircleNoneBG iconName={'hashtag'}/>
        </div>
      </div>
    );
  }
}

export default Header;
