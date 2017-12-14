import subHeaderStyles from './SubHeader.style.css';
import React, {Component} from 'react';
class SubHeader extends  Component {
  render () {
    return (
      <div className={subHeaderStyles.subHeader} > 
        <div className={`${subHeaderStyles.container} ${subHeaderStyles.initial}`} >
          <div className={subHeaderStyles.titile}> TWEETS</div>
          <div className={subHeaderStyles.value}> 200 </div>
        </div>
        <div className={`${subHeaderStyles.container} ${subHeaderStyles.buttomHover}`} >
          <div className={subHeaderStyles.titile}> PHOTOS/VIDEOS</div>
          <div className={subHeaderStyles.value}> 200 </div>
        </div>
        <div className={`${subHeaderStyles.container} ${subHeaderStyles.buttomHover}`} >
          <div className={subHeaderStyles.titile}> FOLLOWING</div>
          <div className={subHeaderStyles.value}> 200 </div>
        </div>
        <div className={`${subHeaderStyles.container} ${subHeaderStyles.buttomHover}`} >
          <div className={subHeaderStyles.titile}> FOLLOWERS</div>
          <div className={subHeaderStyles.value}> 1M </div>
        </div>
      </div>
    );
  }
}
export default SubHeader;