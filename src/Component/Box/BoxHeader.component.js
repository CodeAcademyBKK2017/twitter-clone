import inputStyles from './Box.component.css';
import React, {Component} from 'react';
import classNames from 'classname';

class BoxHeader extends Component {
  render () {
    return (
      <div className={classNames(inputStyles.BoxTitle, inputStyles.Shadow)}>
        <div />
        <div />
        <div />
        <div />
      </div>
    );
  }
}

export default BoxHeader;