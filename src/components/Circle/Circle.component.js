import circleStyle from './Circle.style.css';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
class Circle extends  Component {
  render ()    {
    let circleClass;
    if (this.props.type === 'twitter') {
      circleClass = `${circleStyle.circle} ${circleStyle.twitter}`;
    } else if (this.props.type === 'normalL') {
      circleClass = `${circleStyle.circle} ${circleStyle.marginL}`;
    } else if (this.props.type === 'normalRL') {
      circleClass = `${circleStyle.circle} ${circleStyle.marginRL}`;
    } else {
      circleClass = `${circleStyle.circle}`;
    }
    return (
      <div className={`${circleClass}`} > {this.props.children} </div>
    );
  }
}
export default Circle;

Circle.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string
};