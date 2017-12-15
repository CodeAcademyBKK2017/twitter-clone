import SideMenuStyle from './SideMenu.style.css';
import React, {Component} from 'react';
import SearchBar from '../SearchBar/SearchBar.component';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class SideMenu extends Component {
	render () {
		const {isHidden} = this.props;
		return (
			<div className={classNames(SideMenuStyle.container, {[SideMenuStyle.hidden]: isHidden})}>
				<div className={SideMenuStyle.searchBarContainer}>
					<SearchBar isInSideMenu={true}/>
				</div>
				
				<div className={SideMenuStyle.menuContainer}/>

				<div className={SideMenuStyle.creditContainer}>
					<b>Made by: Chong</b>
				</div>
			</div>
		);
	}
}

SideMenu.propTypes = {
	isHidden: PropTypes.bool.isRequired
};

SideMenu.defaultProps = {
	isHidden: false
};

export default SideMenu;
