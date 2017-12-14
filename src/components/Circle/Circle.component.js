import './Circle.css';
import React, {Component} from 'react';
import {Icon} from 'react-fa';
import PropTypes from 'prop-types';

class Circle extends Component {

  render () {
    const {iconName, opaque, children} = this.props;
    const element = children || <Icon name={iconName} />;

    return (
      <div className={`circle ${opaque ? 'circle-opaque' : ''}`}>
        {element}
      </div>
    );
  }
}

Circle.propTypes = {
  iconName: PropTypes.string,
  children: PropTypes.node,
  opaque: PropTypes.bool
};

Circle.defaultTypes = {
  opaque: false
};

export default Circle;
