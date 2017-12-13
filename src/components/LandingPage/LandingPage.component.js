import './LandingPage.style.css';
import React, {Component} from 'react';
import {Icon} from 'react-fa';
// import PropTypes from 'prop-types';
// import noop from 'lodash/noop';

class LandingPage extends Component {
	render () {
		// const {title, type, onClick} = this.props;
		
		return (
			<div className="container">
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
				
				<div className="main">
					<div className="center">
						<div className="box menu"/>
						<div className="box content"/>
					</div>
				</div>
			</div>
		);
	}
}

// Button.propTypes = {
// 	title: PropTypes.string.isRequired,
// 	type: PropTypes.oneOf(["ADD", "SUB"]).isRequired,
// 	onClick: PropTypes.func.isRequired
// };

// Button.defaultProps = {
// 	title: "",
// 	type: "ADD",
// 	onClick: noop
// };

export default LandingPage;
