import './Circle.css';
import React, {Component} from 'react';

class Circle extends Component {
  render () {
    return (
      <div className={this.props.circle}>
        {this.props.children}
      </div>
    );
  }
}

export default Circle;
