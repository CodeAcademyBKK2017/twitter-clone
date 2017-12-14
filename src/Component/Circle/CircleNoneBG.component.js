import inputStyles from './Circle.component.css';
import React, {Component} from 'react';
import {Icon} from 'react-fa';
import PropTypes from 'prop-types';
import className from 'classname';

class CircleNoneBG extends Component {
  render () {
    return (
      <div className={inputStyles.boxCircle}>
        <div className={className(inputStyles.circle, inputStyles.circleColor)}>
          <Icon name={`${this.props.iconName}`}/>
        </div>
      </div>
    );
  }
}

CircleNoneBG.propTypes = {
  iconName: PropTypes.string.isRequired
};

export default CircleNoneBG;
