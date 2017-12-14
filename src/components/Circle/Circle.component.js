import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import circleStyle from './Circle.style.css';
import {Icon} from 'react-fa';

class Circle extends Component {
  render () {
    const {iconName, type} = this.props;
    const styleType = (type, circleStyle) => type === 'brand' ? circleStyle.brand : circleStyle.normal;
    return (
      <div className={classNames(styleType(type, circleStyle))}>
        <Icon name={iconName} />
      </div>
    );
  }
}

Circle.propTypes = {
  iconName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

Circle.defaultProps = {
  iconName: 'twitter',
  type: 'normal'
};

export default Circle;