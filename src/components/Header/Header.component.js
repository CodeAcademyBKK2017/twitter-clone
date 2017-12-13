import './Header.style.css';
import React, {Component} from 'react';
import {Icon} from 'react-fa';

class Header extends Component {
	render () {
		return (
			<div className="box twitter-header">
				<div className="left-content">
					<button className="circle border twitter">
						<Icon name="twitter"/>
					</button>
					<button className="circle border">
						<Icon name="bell-o"/>
					</button>
					<button className="circle border">
						<Icon name="envelope-o"/>
					</button>
					<button className="circle border">
						<Icon name="hashtag"/>
					</button>
				</div>

				<div className="logo-content">
					<Icon className="twitter-logo" name="twitter" size="2x"/>
				</div>

				<div className="right-content">
					<input className="search-box" type="text"/>
					<button className="circle border" />
				</div>
			</div>
		);
	}
}

export default Header;
