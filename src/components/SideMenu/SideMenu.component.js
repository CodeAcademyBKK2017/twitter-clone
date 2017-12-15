import SideMenuStyle from './SideMenu.style.css';
import React, {Component} from 'react';
import SearchBar from '../SearchBar/SearchBar.component';

class SideMenu extends Component {
	render () {
		return (
			<div className={SideMenuStyle.container}>
				<div className={SideMenuStyle.searchBarContainer}>
					<SearchBar isInSideMenu={true}/>
				</div>
				
				<div className={SideMenuStyle.creditContainer}>
					<b>Made by: Chong</b>
				</div>
			</div>
		);
	}
}

export default SideMenu;
