import CircleStyle from './Circle.style.css';
import React, {Component} from 'react';
import Icon from 'react-ionicons';
import PropTypes from 'prop-types';

class Circle extends Component {
	render () {
		const {children, isBrand, iconName} = this.props;
		return (
			<div className={`${CircleStyle.circle} ${isBrand ? CircleStyle.brand : ''}`}>
				<Icon icon={iconName}/>
				{children}
			</div>
		);
	}
}

Circle.propTypes = {
	children: PropTypes.node.isRequired,
	isBrand: PropTypes.bool.isRequired,
	iconName: PropTypes.string.isRequired
};

Circle.defaultProps = {
	children: [],
	isBrand: false,
	iconName: ''
};

export default Circle;
