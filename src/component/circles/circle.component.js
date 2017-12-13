import './circle.style.css';
import React, {Component} from 'react';
import ProptTypes from 'prop-types';

class circle extends Component {
  render () {
    return (
      <div className='sperateBTN isFlex Center'>
        <div className='cirBTN isFlex Center'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

circle.propTypes = {
  children: ProptTypes.object.isRequired
};

circle.defaultProps = {
  children: {}
};

export default circle;
