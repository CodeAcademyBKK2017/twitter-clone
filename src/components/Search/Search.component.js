import React, {Component} from 'react';
import classNames from 'classnames';
import searchStyle from './Search.style.css';
import Ionicon from 'react-ionicons';

class Search extends Component {
  render () {
    return (
      <div className={classNames(searchStyle.form)}>
        <input type="text" className={classNames(searchStyle.form__input)} />
        <Ionicon name="search" icon="ios-search-outline" className={classNames(searchStyle.form__icon)} fontSize="22px" />
      </div>
    );
  }
}

export default Search;