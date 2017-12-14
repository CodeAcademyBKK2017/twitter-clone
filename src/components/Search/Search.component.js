import React, {Component} from 'react';
import classNames from 'classnames';
import searchStyle from './Search.style.css';
import {Icon} from 'react-fa';

class Search extends Component {
  render () {
    return (
      <div className={classNames(searchStyle.form)}>
        <input type="text" className={classNames(searchStyle.form__input)} />
        <Icon name="search" className={classNames(searchStyle.form__icon)} />
      </div>
    );
  }
}

export default Search;