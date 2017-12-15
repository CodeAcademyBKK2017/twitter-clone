import TapbarStyle from './Tapbar.css';
import React, {Component} from 'react';
import classNames from 'classnames';
// import {Icon} from 'react-fa'; 

class Tapbar extends Component {
  render () {
    return (
      <div className={classNames(TapbarStyle.second_container, TapbarStyle.box_shadow, TapbarStyle.background_white)}>
        <div className={TapbarStyle.box_tweets}>
          <div className={TapbarStyle.box_tweets_item1}>TWEETS</div>
          <div className={TapbarStyle.box_tweets_item2}>200</div>
        </div>
        <div className={TapbarStyle.box_photos}>
          <div className={TapbarStyle.box_photos_item1}>PHOTOS/VIDEOS</div>
          <div className={TapbarStyle.box_photos_item2}>200</div>
        </div>
        <div className={TapbarStyle.box_following}>
          <div className={TapbarStyle.box_following_item1}>FOLLOWING</div>
          <div className={TapbarStyle.box_following_item2}>200</div>
        </div>
        <div className={TapbarStyle.box_followers}>
          <div className={TapbarStyle.box_followers_item1}>FOLLOWERS</div>
          <div className={TapbarStyle.box_followers_item2}>1M</div>
        </div>
      </div>
    );
  }
}

export default Tapbar;
