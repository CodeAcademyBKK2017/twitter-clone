import SearchCss from './search.style.css';
import React, {Component} from 'react';
import {Icon} from 'react-fa';
import AppCss from '../../App.css';
import className from 'classname';

class Search extends Component {
  render () {
    return (
      <div className={className(SearchCss.searchInput, AppCss.isFlex, AppCss.Center)}>
        <input type="text" placeholder="Search"/>
        <Icon name="search"/>
      </div>
    );
  }
}

export default Search;
