import SearchStyles from './Search.css';
import React, {Component} from 'react';


class Search extends Component {

  render () {
    return (
      <div className={SearchStyles.search}>
        <input name="search" placeholder="Search" />
        {/* <Icon name="search" /> */}
      </div>
    );
  }
}

export default Search;
