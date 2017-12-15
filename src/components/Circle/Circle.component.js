import CircleStyles from  './Circle.css';
import React, {Component} from 'react';
import Icon from 'react-ionicons';
import PropTypes from 'prop-types';

class Circle extends Component {

  render () {
    const {imageSrc, iconName, opaque} = this.props;
    const isIcon = !!iconName;
    const iconColor = opaque ? 'white' : '#605e58';
    const element = isIcon ? <Icon icon={iconName} color={iconColor} fontSize="20px"/> : <div style={{backgroundImage: imageSrc, width: '24px', height: '24px'}} />;
    // console.log('asdfasfd', imageSrc);
    return (
      <div className={`${CircleStyles.circle} ${opaque ? CircleStyles.circleOpaque : ''}`}>
        {element}
      </div>
    );
  }
}

Circle.propTypes = {
  iconName: PropTypes.string,
  imageSrc: PropTypes.string,
  opaque: PropTypes.bool
};

Circle.defaultTypes = {
  opaque: false,
  iconName: ''
};

export default Circle;
