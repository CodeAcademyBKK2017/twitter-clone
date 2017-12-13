import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Search.style.css';
import {Icon} from 'react-fa';

class Search extends Component {
  render () {
    return (
      <div className="search-form">
        <input type="text" className="search-form__input" />
        <Icon name="search" className="search-form__icon" />
      </div>
    );
  }
}

export default Search;