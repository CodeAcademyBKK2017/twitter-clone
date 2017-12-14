import CircleStyles from  './Circle.css';
import React, {Component} from 'react';
import Icon from 'react-ionicons';
import PropTypes from 'prop-types';

class Circle extends Component {

  render () {
    const {iconName, opaque, children} = this.props;
    const iconColor = opaque ? 'white' : '#605e58';
    const element = children || <Icon icon={iconName} color={iconColor} fontSize="20px"/>;
   
    return (
      <div className={`${CircleStyles.circle} ${opaque ? CircleStyles.circleOpaque : ''}`}>
        {element}
      </div>
    );
  }
}

Circle.propTypes = {
  iconName: PropTypes.string,
  children: PropTypes.node,
  opaque: PropTypes.bool
};

Circle.defaultTypes = {
  opaque: false
};

export default Circle;
