import React, {Component} from 'react';
import {Icon} from 'react-fa';

class Search extends Component {

  render () {
    return (
      <div className="search">
        <input name="search" placeholder="Search" />
        <Icon name="search" />
      </div>
    );
  }
}

export default Search;


