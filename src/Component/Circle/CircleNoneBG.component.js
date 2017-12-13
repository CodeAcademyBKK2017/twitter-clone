import './Circle.component.css';
import React, {Component} from 'react';
import {Icon} from 'react-fa';

class CircleNoneBG extends Component {
  render () {
    return (
      <div className='Box-Circle'>
        <div className='Circle Circle-Color'><Icon name={`${this.props.iconName}`}/></div>
      </div>
    );
  }
}

export default CircleNoneBG;
