import inputStyles from './Header.css';
import React, {Component} from 'react';
import CircleBG from '../Circle/CircleBG.component';
import CircleNoneBG from '../Circle/CircleNoneBG.component';
import InputBorder from '../InputBorder/InputBorder.component';
import Icon from 'react-ionicons';
import className from 'classname';

class Header extends Component {
  render () {
    return (
      <div className={className(inputStyles.header, inputStyles.shadow)}>

        <div className={className(inputStyles.flex4, inputStyles.contentLeft)}>
          <CircleBG iconName={'logo-twitter'} color='white'/>
          <div className={inputStyles.divide}/>
          <CircleNoneBG iconName={'ios-notifications'}/>
          <CircleNoneBG iconName={'ios-mail'}/>
          <CircleNoneBG iconName={'ios-star'}/>
        </div>

        <div className={inputStyles.flex1}><Icon fontSize='35px' color='#80A8CC' icon='logo-twitter'/></div>

        <div className={className(inputStyles.flex4, inputStyles.contentRight)}>
          <InputBorder />
          <CircleNoneBG iconName={'ios-more'}/>
        </div>
      </div>
    );
  }
}

export default Header;
