import TapbarStyle from './Tapbar.css';
import React, {Component} from 'react';
import classNames from 'classnames';
// import {Icon} from 'react-fa'; 

class Tapbar extends Component {
  render () {
    return (
      <div className={classNames(TapbarStyle.second_container, TapbarStyle.box_shadow, TapbarStyle.background_white)}>
        <div className={classNames(TapbarStyle.box_tweets, TapbarStyle.box_tweets_first)}>
          <div className={TapbarStyle.box_tweets_item1}>TWEETS</div>
          <div className={TapbarStyle.box_tweets_item2}>200</div>
        </div>
        <div className={TapbarStyle.box_tweets}>
          <div className={TapbarStyle.box_tweets_item1}>PHOTOS/VIDEOS</div>
          <div className={TapbarStyle.box_tweets_item2}>200</div>
        </div>
        <div className={TapbarStyle.box_tweets}>
          <div className={TapbarStyle.box_tweets_item1}>FOLLOWING</div>
          <div className={TapbarStyle.box_tweets_item2}>200</div>
        </div>
        <div className={TapbarStyle.box_tweets}>
          <div className={TapbarStyle.box_tweets_item1}>FOLLOWERS</div>
          <div className={TapbarStyle.box_tweets_item2}>1M</div>
        </div>
      </div>
    );
  }
}

export default Tapbar;
