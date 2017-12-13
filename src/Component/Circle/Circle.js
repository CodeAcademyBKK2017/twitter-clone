import './Circle.css';
import React, {Component} from 'react';
import {Icon} from 'react-fa';

class Circle extends Component {
  render () {
      const {name} = this.props;
    return (     
        <div className='Circle'>
            <Icon name={name}/>
        </div>       
    );
  }
}

export default Circle;
