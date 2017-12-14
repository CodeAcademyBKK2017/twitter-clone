import inputStyles from './InputBorder.component.css';
import React, {Component} from 'react';
import {Icon} from 'react-fa';

class InputBorder extends Component {
  render () {
    return (
      <div className={inputStyles.borderStyle}>
        <input className={inputStyles.inputStyle} placeholder="Search"/>
        <Icon className={inputStyles.colorStyle} name='search'/>
      </div>
    );
  }
}

export default InputBorder;
