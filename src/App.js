import appStyle from './App.css';
import React, {Component} from 'react';
import Header from './components/Header/Header.component';
import classNames from 'classnames';
// import {Icon} from 'react-fa'; 

class App extends Component {
  render () {
    return (
      <div className={appStyle.main_app}>
        <Header/>
        <div className={appStyle.box_main}>
          <div className={classNames(appStyle.second_container, appStyle.box_shadow, appStyle.background_white)}>
            <div className={appStyle.box_tweets}>
              <div className={appStyle.box_tweets_item1}>TWEETS</div>
              <div className={appStyle.box_tweets_item2}>200</div>
            </div>
            <div className={appStyle.box_photos}>
              <div className={appStyle.box_photos_item1}>PHOTOS/VIDEOS</div>
              <div className={appStyle.box_photos_item2}>200</div>
            </div>
            <div className={appStyle.box_following}>
              <div className={appStyle.box_following_item1}>FOLLOWING</div>
              <div className={appStyle.box_following_item2}>200</div>
            </div>
            <div className={appStyle.box_followers}>
              <div className={appStyle.box_followers_item1}>FOLLOWERS</div>
              <div className={appStyle.box_followers_item2}>1M</div>
            </div>
          </div>
          <div className={classNames(appStyle.content, appStyle.box_shadow, appStyle.background_white)}/>
        </div>
      </div>
    );
  }
}

export default App;
