import './search.style.css';
import React, {Component} from 'react';
import {Icon} from 'react-fa';

class Search extends Component {
  render () {
    return (
      <div className='searchInput isFlex Center'>
        <input type="text" placeholder="Search"/>
        <Icon name="search"/>
      </div>
    );
  }
}

export default Search;
