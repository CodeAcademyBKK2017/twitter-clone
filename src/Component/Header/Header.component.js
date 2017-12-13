import './Header.css';
import React, {Component} from 'react';
import CircleBG from '../Circle/CircleBG.component';
import CircleNoneBG from '../Circle/CircleNoneBG.component';
import InputBorder from '../InputBorder/InputBorder.component';
import {Icon} from 'react-fa';

class Header extends Component {
  render () {
    return (
      <div className='Header Shadow'>

        <div className='Flex4 Content-Left'>
          <CircleBG iconName={'twitter'} color='#80A8CC'/>
          <div className='Divide'/>
          <CircleNoneBG iconName={'bell-o'}/>
          <CircleNoneBG iconName={'envelope-o'}/>
          <CircleNoneBG iconName={'hashtag'}/>
        </div>

        <div className='Flex1'><Icon className='Icon-Logo' size='2x' name='twitter'/></div>

        <div className='Flex4 Content-Right'>
          <InputBorder />
          <CircleNoneBG iconName={'hashtag'}/>
        </div>
      </div>
    );
  }
}

export default Header;
