import inputStyles from './Header.css';
import React, {Component} from 'react';
import CircleBG from '../Circle/CircleBG.component';
import CircleManu from '../Circle/CircleManu.component';
import CircleNoneBG from '../Circle/CircleNoneBG.component';
import InputBorder from '../InputBorder/InputBorder.component';
import Icon from 'react-ionicons';
import className from 'classname';
import SlideManu from '../SlideManu/SlideManu.component';

class Header extends Component {

  state = {
    menuVisibility: false
  }

  toggleMenu = () => {
    this.setState({menuVisibility: !this.state.menuVisibility});
  }

  render () {
    return (
      <div >
        <div className={className(inputStyles.header, inputStyles.shadow)}>

          <div className={className(inputStyles.flex4, inputStyles.contentLeft)}>
          
            <CircleBG iconName={'logo-twitter'} color='white'/>
            <div onClick={this.toggleMenu}>
              <CircleManu iconName={'md-menu'} color='white' />
            </div>

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
        <div className={className({hide: !this.state.menuVisibility})}>
          <SlideManu />
        </div>
      </div>
    );
  }
}

export default Header;
