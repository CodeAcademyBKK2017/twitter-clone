import './LandingPage.style.css';
import React, {Component} from 'react';
import Header from '../Header/Header.component';

// import PropTypes from 'prop-types';
// import noop from 'lodash/noop';

class LandingPage extends Component {
	render () {
		// const {title, type, onClick} = this.props;
		
		return (
			<div className="container">
				<Header/>
				
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
