import './Circle.component.css';
import React, {Component} from 'react';
import {Icon} from 'react-fa';

class CircleBG extends Component {
  render () {
    return (
      <div className='Box-Circle'>
        <div className='Circle Circle-Color-Blue'><Icon className='Icon-Color-White' name={`${this.props.iconName}`}/></div>
      </div>
    );
  }
}

export default CircleBG;
