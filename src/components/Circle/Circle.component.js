import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Circle.style.css';
import {Icon} from 'react-fa';

class Circle extends Component {
  render () {
    const {iconName, colorStyle} = this.props;
    return (
      <div className={`icon ${colorStyle ? 'icon__' + colorStyle : 'icon__gray'}`}>
        <Icon name={iconName} />
      </div>
    );
  }
}

export default Circle;