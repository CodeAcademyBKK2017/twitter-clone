import inputStyles from './Circle.component.css';
import React, {Component} from 'react';
import {Icon} from 'react-fa';
import PropTypes from 'prop-types';
import className from 'classname';

class CircleBG extends Component {
  render () {
    return (
      <div className={inputStyles.boxCircle}>
        <div className={className(inputStyles.circle, inputStyles.circleColorBlue)}><Icon className={inputStyles.iconColorWhite} name={`${this.props.iconName}`}/></div>
      </div>
    );
  }
}

CircleBG.propTypes = {
  iconName: PropTypes.string.isRequired
};

export default CircleBG;
