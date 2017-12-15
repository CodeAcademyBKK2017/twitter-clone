import SearchBarStyle from './SearchBar.style.css';
import React, {Component} from 'react';
import Icon from 'react-ionicons';
import PropTypes from 'prop-types';

class SearchBar extends Component {
	render () {
		const {isInSideMenu} = this.props;
		return (
			<div className={`${SearchBarStyle.searchBar} ${isInSideMenu ? SearchBarStyle.searchBarInSideMenu : ''}`}>
				<input className={SearchBarStyle.searchBox} type="text" placeholder="Search"/>
				<Icon className={SearchBarStyle.searchIcon} icon="ios-search"/>
			</div>
		);
	}
}

SearchBar.propTypes = {
	isInSideMenu: PropTypes.bool.isRequired
};

SearchBar.defaultProps = {
	isInSideMenu: false
};

export default SearchBar;
