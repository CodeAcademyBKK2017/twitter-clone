import SearchStyles from './Search.css';
import React, {Component} from 'react';
import Icon from 'react-ionicons';

class Search extends Component {

  render () {
    return (
      <div className={SearchStyles.search}>
        <input name="search" placeholder="Search" />
        <Icon icon="ios-search" color="#5f5e58" />
      </div>
    );
  }
}

export default Search;
