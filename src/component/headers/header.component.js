import './header.style.css';
import Circle from '../circles/circle.component';
import {Icon} from 'react-fa';
import React, {Component} from 'react';
import Search from '../searchs/search.component';

class Header extends Component {
  render () {
    return (
      <div className="headerTwit shadowStyle" >
        <div className="leftContain isFlex">
          <div className="leftConLogo Center isFlex"><Icon name='twitter' className='logoLeft' /></div>
          <div className="btnGroup isFlex">
            <Circle>
              <Icon name='bell-o'/>
            </Circle>
            <Circle>
              <Icon name='envelope-o'/>
            </Circle>
            <Circle>
              <Icon name='hashtag'/>
            </Circle>
          </div>
        </div>
        <div className="ConLogo Center isFlex"><Icon name='twitter' className="Logo" size='2x'/></div>
        <div className="rightContain isFlex">
          <Search/>
          <Circle>
            <img src='https://scontent-iad3-1.xx.fbcdn.net/v/t39.1997-6/s110x80/13601946_1176746099014660_1320250140_n.png?_nc_ad=z-m&_nc_cid=0&oh=2a7109b26b5725dd0ef7741df62012c4&oe=5AC2F560' className='logoBtn userIcon'/>
          </Circle>
        </div>
      </div>
    );
  }
}

export default Header;
