import './Circle.css';
import React, {Component} from 'react';
import {Icon} from 'react-fa';

class Circle extends Component {
  render () {
      const {name, isBrand} = this.props;
      const brandClass = isBrand ? 'circle-brand' : ''; // ternary operator
    return (     
        <div className={`Circle ${brandClass}`}>
            <Icon name={name} />
        </div>       
    );
  }
}

export default Circle;
