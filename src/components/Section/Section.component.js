import SectionStyle from './Section.style.css';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
	render () {
		const {active, title, value} = this.props;
		return (
			<div className={`${SectionStyle.container} ${active ? SectionStyle.active : ''}`}>
				<div className={SectionStyle.subContainer}>
					<div className={SectionStyle.title}>{title}</div>
					<b className={SectionStyle.value}>{value}</b>
				</div>
			</div>
		);
	}
}

Section.propTypes = {
	active: PropTypes.bool.isRequired,
	title: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
};

Section.defaultProps = {
	active: false,
	title: '',
	value: ''
};

export default Section;
