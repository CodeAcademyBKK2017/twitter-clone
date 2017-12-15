import CircleStyle from './Circle.style.css';
import React, {Component} from 'react';
import Icon from 'react-ionicons';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

class Circle extends Component {
	render () {
		const {children, isBrand, iconName, onButtonClick} = this.props;
		return (
			<div className={`${CircleStyle.circle} ${isBrand ? CircleStyle.brand : ''}`} onClick={onButtonClick}>
				<Icon icon={iconName}/>
				{children}
			</div>
		);
	}
}

Circle.propTypes = {
	children: PropTypes.node.isRequired,
	isBrand: PropTypes.bool.isRequired,
	iconName: PropTypes.string.isRequired,
	onButtonClick: PropTypes.func.isRequired
};

Circle.defaultProps = {
	children: [],
	isBrand: false,
	iconName: '',
	onButtonClick: noop
};

export default Circle;
