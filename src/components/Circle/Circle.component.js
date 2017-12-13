import './Circle.style.css';
import React, {Component} from 'react';
import {Icon} from 'react-fa';
import PropTypes from 'prop-types';

class Circle extends Component {
	render () {
		const {isBrand, iconName} = this.props;
		return (
			<div className={`circle ${isBrand ? 'brand' : ''}`}>
				<Icon name={iconName}/>
			</div>
		);
	}
}

Circle.propTypes = {
	// children: PropTypes.node.isRequired,
	isBrand: PropTypes.bool.isRequired,
	iconName: PropTypes.string.isRequired
};

Circle.defaultProps = {
	// children: null,
	isBrand: false,
	iconName: ''
};

export default Circle;
