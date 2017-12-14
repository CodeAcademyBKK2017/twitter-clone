import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import circleStyle from './Circle.style.css';
import Ionicon from 'react-ionicons';

class Circle extends Component {
  render () {
    const {iconName, type} = this.props;
    const styleType = (type, circleStyle) => type === 'brand' ? circleStyle.brand : circleStyle.normal;
    return (
      <div className={classNames(styleType(type, circleStyle))}>
        <Ionicon icon={iconName} fontSize="35px" />
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