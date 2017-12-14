import SearchCss from './search.style.css';
import React, {Component} from 'react';
import Icon from 'react-ionicons';
import AppCss from '../../App.css';
import className from 'classname';

class Search extends Component {
  render () {
    return (
      <div className={className(SearchCss.searchInput, AppCss.isFlex, AppCss.Center)}>
        <input type="text" placeholder="Search"/>
        <Icon icon="ios-search-outline"/>
      </div>
    );
  }
}

export default Search;
