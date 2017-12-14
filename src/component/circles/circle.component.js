import circleCss from './circle.style.css';
import AppCss from '../../App.css';
import React, {Component} from 'react';
import ProptTypes from 'prop-types';
import className from 'classname';

class circle extends Component {
  render () {
    return (
      <div className={className(circleCss.sperateBTN, AppCss.isFlex, AppCss.Center)}>
        <div className={className(circleCss.cirBTN, AppCss.isFlex, AppCss.Center)}>
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
