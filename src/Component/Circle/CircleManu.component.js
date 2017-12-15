import inputStyles from './Circle.component.css';
import React, {Component} from 'react';
import Icon from 'react-ionicons';
import PropTypes from 'prop-types';
import className from 'classname';

class CircleManu extends Component {
  render () {
    return (
      <div className={className(inputStyles.boxCircleHide, inputStyles.boxCircle)}>
        <div className={className(inputStyles.circle, inputStyles.circleColorBlue)}>
          <Icon className={inputStyles.iconColorWhite} color={`${this.props.color}`} icon={`${this.props.iconName}`}/>
        </div>
      </div>
    );
  }
}

CircleManu.propTypes = {
  iconName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default CircleManu;
