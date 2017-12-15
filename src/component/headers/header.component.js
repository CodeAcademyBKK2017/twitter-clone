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
            <img className={className(HeaderCSS.logoBtn, HeaderCSS.userIcon)} src='https://scontent.fbkk1-1.fna.fbcdn.net/v/t1.0-9/23172488_10210127392877297_6031642395833861761_n.jpg?_nc_fx=fbkk1-6&oh=b791e2f9e6f9e660e7660714d1ffa3bc&oe=5AD73CDB'/>
          </Circle>
        </div>
      </div>
    );
  }
}

export default Header;
