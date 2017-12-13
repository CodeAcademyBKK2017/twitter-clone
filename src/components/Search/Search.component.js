import './Search.style.css';
import React, {Component} from 'react';
import {Icon} from 'react-fa';
class Search extends Component {
  render () {
    return (
      <div className="search" >
        <input className="input" />
        <div className="search-icon">
          <Icon name='search' />
        </div>
      </div>
    );
  }    
}
export default Search;