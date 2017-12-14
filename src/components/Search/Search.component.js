import searchStyle from './Search.style.css';
import React, {Component} from 'react';
import Icon from 'react-ionicons';
class Search extends Component {
  render () {
    return (
      <div className={searchStyle.search} >
        <input className={searchStyle.input} />
        <div className={searchStyle.searchIcon}>
          <Icon icon='ios-search' />
        </div>
      </div>
    );
  }    
}
export default Search;