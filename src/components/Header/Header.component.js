import './Header.style.css';
import React, {Component} from 'react';
import Circle from '../Circle/Circle.component';
import {Icon} from 'react-fa';

class Header extends Component {
	render () {
		return (
			<div className="box twitter-header">
				<div className="left-content">
					<Circle isMain={true}>
						<Icon name="twitter"/>
					</Circle>
					<Circle>
						<Icon name="bell-o"/>
					</Circle>
					<Circle>
						<Icon name="envelope-o"/>
					</Circle>
					<Circle>
						<Icon name="hashtag"/>
					</Circle>
					<Circle />
				</div>

				<div className="logo-content">
					<Icon className="twitter-logo" name="twitter" size="2x"/>
				</div>

				<div className="right-content">
					<input className="search-box" type="text"/>
					<Circle />
				</div>
			</div>
		);
	}
}

export default Header;
