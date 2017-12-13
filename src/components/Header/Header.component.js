import './Header.style.css';
import React, {Component} from 'react';
import Circle from '../Circle/Circle.component';
import SearchBar from '../SearchBar/SearchBar.component';
import {Icon} from 'react-fa';

class Header extends Component {
	render () {
		return (
			<div className="box twitter-header">
				<div className="left-content">
					<div className="brand-container">
						<Circle isBrand={true} iconName="twitter"/>
					</div>
					
					<div className="line-spliter"/>

					<div className="button-container">
						<Circle iconName="bell-o"/>
						<Circle iconName="envelope-o"/>
						<Circle iconName="hashtag"/>
						<Circle/>
					</div>
				</div>

				<div className="logo-content">
					<Icon className="twitter-logo" name="twitter" size="2x"/>
				</div>

				<div className="right-content">
					<SearchBar/>

					<div className="brand-container">
						<Circle/>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
