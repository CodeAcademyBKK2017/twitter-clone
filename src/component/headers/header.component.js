import HeaderCSS from './header.style.css';
import AppCss from '../../App.css';
import Circle from '../circles/circle.component';
import Icon from 'react-ionicons';
import React, {Component} from 'react';
import Search from '../searchs/search.component';
import className from 'classname';

class Header extends Component {
  render () {
    return (
      <div className={className(HeaderCSS.headerTwit, AppCss.shadowStyle)} >
        <div className={className(HeaderCSS.leftContain, AppCss.isFlex)}>
          <div className={className(HeaderCSS.leftConLogo, AppCss.Center, AppCss.isFlex)}><Icon icon='logo-twitter' fontSize='10px' color='white' className={`${HeaderCSS.logoLeft}`} /></div>
          <div className={className(HeaderCSS.btnGroup, AppCss.isFlex)}>
            <Circle>
              <Icon icon='ios-notifications-outline'/>
            </Circle>
            <Circle>
              <Icon icon='ios-mail-outline'/>
            </Circle>
            <Circle>
              <Icon icon='ios-grid-outline'/>
            </Circle>
          </div>
        </div>
        <div className={className(HeaderCSS.ConLogo, AppCss.Center, AppCss.isFlex)}><Icon icon='logo-twitter' color='rgb(29, 161, 242)'className={`${HeaderCSS.Logo}`} size='2x'/></div>
        <div className={className(HeaderCSS.rightContain, AppCss.isFlex)}>
          <Search/>
          <Circle>
            <img className={className(HeaderCSS.logoBtn, HeaderCSS.userIcon)} src='https://scontent-iad3-1.xx.fbcdn.net/v/t39.1997-6/s110x80/13601946_1176746099014660_1320250140_n.png?_nc_ad=z-m&_nc_cid=0&oh=2a7109b26b5725dd0ef7741df62012c4&oe=5AC2F560'/>
          </Circle>
        </div>
      </div>
    );
  }
}

export default Header;
