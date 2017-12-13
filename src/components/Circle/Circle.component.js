import './Circle.css';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Circle extends Component {
  render () {
    return (
      <div className={this.props.circle}>
        {this.props.children}
      </div>
    );
  }
}

Circle.propTypes = {
  circle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
Circle.defaultProps = {
};

export default Circle;
