import LandingPageStyle from './LandingPage.style.css';
import React, {Component} from 'react';
import Header from '../Header/Header.component';

// import PropTypes from 'prop-types';
// import noop from 'lodash/noop';

class LandingPage extends Component {
	render () {
		// const {title, type, onClick} = this.props;
		
		return (
			<div className={LandingPageStyle.container}>
				<Header/>
				
				<div className={LandingPageStyle.main}>
					<div className={LandingPageStyle.center}>
						<div className={`${LandingPageStyle.box} ${LandingPageStyle.menu}`}/>
						<div className={`${LandingPageStyle.box} ${LandingPageStyle.content}`}/>
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
