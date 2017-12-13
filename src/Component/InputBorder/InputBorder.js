import './InputBorder.css';
import React, {Component} from 'react';
import {Icon} from 'react-fa';

class InputBorder extends Component {
  render () {
    return (
      <div className='Border'>
        <input className='Input' placeholder="Search"/>
        <Icon className='Color' name='search'/>
      </div>
    );
  }
}

export default InputBorder;