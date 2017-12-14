import SearchBarStyle from './SearchBar.style.css';
import React, {Component} from 'react';
import {Icon} from 'react-fa';

class SearchBar extends Component {
	render () {
		return (
			<div className={SearchBarStyle.searchBar}>
				<input className={SearchBarStyle.searchBox} type="text"/>
				<Icon className={SearchBarStyle.searchIcon} name="search"/>
			</div>
		);
	}
}

export default SearchBar;
