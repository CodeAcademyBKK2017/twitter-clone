import './SearchBar.style.css';
import React, {Component} from 'react';
import {Icon} from 'react-fa';

class SearchBar extends Component {
	render () {
		return (
			<div className="search-bar">
				<input className="search-box" type="text"/>
				<Icon className="search-icon" name="search"/>
			</div>
		);
	}
}

export default SearchBar;
