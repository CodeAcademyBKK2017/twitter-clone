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
					<Icon name="twitter"/>
				</div>

				<div className="left-content">
					<input className="search-box" type="text"/>
					<button className=""/>
				</div>
			</div>
		);
	}
}

export default Header;
