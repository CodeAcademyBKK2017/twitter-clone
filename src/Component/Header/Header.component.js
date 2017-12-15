import inputStyles from './Header.css';
import React, {Component} from 'react';
import CircleBG from '../Circle/CircleBG.component';
import CircleManu from '../Circle/CircleManu.component';
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
          {/* hide Hamberger icon */}
          <CircleManu iconName={'md-menu'} color='white'/>

          <div className={inputStyles.divide}/>
          <div className={inputStyles.itemsHeader}>
            <CircleNoneBG color='#5f5f5f' iconName={'ios-notifications'}/>
            <CircleNoneBG color='#5f5f5f' iconName={'ios-mail'}/>
            <CircleNoneBG color='#5f5f5f' iconName={'ios-grid-outline'}/>
          </div>
        </div>

        <div className={inputStyles.flex1}><Icon fontSize='35px' color='#1e90ff' icon='logo-twitter'/></div>

        <div className={className(inputStyles.flex4, inputStyles.contentRight)}>
          <InputBorder />
          <CircleNoneBG color='red' iconName={'md-heart'}/>
        </div>

        <div className={className(inputStyles.flex4Hide)}/>
      </div>
    );
  }
}

export default Header;
