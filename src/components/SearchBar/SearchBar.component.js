import SearchBarStyle from './SearchBar.style.css';
import React, {Component} from 'react';
import Icon from 'react-ionicons';

class SearchBar extends Component {
	render () {
		return (
			<div className={SearchBarStyle.searchBar}>
				<input className={SearchBarStyle.searchBox} type="text" placeholder="Search"/>
				<Icon className={SearchBarStyle.searchIcon} icon="ios-search"/>
			</div>
		);
	}
}

export default SearchBar;
