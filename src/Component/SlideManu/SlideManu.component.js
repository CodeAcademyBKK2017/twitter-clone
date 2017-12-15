import SlideManuStyle from './SlideManu.component.css';
import React, {Component} from 'react';
import className from 'classname';
import Icon from 'react-ionicons';

class App extends Component {
  render () {
    return (
      <div className={className(SlideManuStyle.tabSlide, SlideManuStyle.shadowTop)}>
        <div className={SlideManuStyle.borderStyle}>
          <input className={SlideManuStyle.inputStyle} placeholder="Search"/>
          <Icon className={SlideManuStyle.colorStyle} fontSize='45px' icon='ios-search'/>
        </div>

        <div className={className(SlideManuStyle.SlideBottomStyle, SlideManuStyle.shadowTop)}>
          <span className={SlideManuStyle.nameStyle}>{'n u b r a b r a'}</span>
        </div>
      </div>
    );
  }
}

export default App;
