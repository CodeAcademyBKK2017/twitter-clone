import searchStyle from './Search.style.css';
import React, {Component} from 'react';
import {Icon} from 'react-fa';
class Search extends Component {
  render () {
    return (
      <div className={searchStyle.search} >
        <input className={searchStyle.input} />
        <div className={searchStyle.searchIcon}>
          <Icon name='search' />
        </div>
      </div>
    );
  }    
}
export default Search;