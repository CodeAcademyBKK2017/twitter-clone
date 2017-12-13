import './Circle.style.css';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
class Circle extends  Component {
  render ()    {
    return (
      <div className={`circle ${this.props.color} ${this.props.margin}`}  > {this.props.children} </div>
    );
  }
}
export default Circle;

Circle.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  margin: PropTypes.margin
};