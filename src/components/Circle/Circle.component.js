import './Circle.style.css';
import React, {Component} from 'react';

import PropTypes from 'prop-types';

class Circle extends Component {
	render () {
		const {children, isMain} = this.props;
		return (
			<div className={`circle ${isMain ? 'main' : ''}`}>
				{children}
			</div>
		);
	}
}

Circle.propTypes = {
	children: PropTypes.node.isRequired,
	isMain: PropTypes.bool.isRequired
};

Circle.defaultProps = {
	children: null,
	isMain: false
};

export default Circle;
