import inputStyles from './Circle.component.css';
import React, {Component} from 'react';
import Icon from 'react-ionicons';
import PropTypes from 'prop-types';
import className from 'classname';

class CircleBG extends Component {
  render () {
    return (
      <div className={inputStyles.boxCircle}>
        <div className={className(inputStyles.circle, inputStyles.circleColorBlue)}><Icon className={inputStyles.iconColorWhite} color={`${this.props.color}`} icon={`${this.props.iconName}`}/></div>
      </div>
    );
  }
}

CircleBG.propTypes = {
  iconName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default CircleBG;
