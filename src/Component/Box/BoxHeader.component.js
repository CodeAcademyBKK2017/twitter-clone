import inputStyles from './Box.component.css';
import React, {Component} from 'react';
import classNames from 'classname';

class BoxHeader extends Component {
  render () {
    return (
      <div className={classNames(inputStyles.BoxTitle, inputStyles.Shadow)}>
        <div className={inputStyles.boxHeaderContent}>
          <span className={inputStyles.textHeaderTitle}>{'TWEETS'}</span>
          <span className={inputStyles.textHeaderNumber}>{'200'}</span>
        </div>
        <div className={inputStyles.boxHeaderContent}>
          <span className={inputStyles.textHeaderTitle}>{'PHOTOS/VIDEOS'}</span>
          <span className={inputStyles.textHeaderNumber}>{'200'}</span>
        </div>
        <div className={inputStyles.boxHeaderContent}>
          <span className={inputStyles.textHeaderTitle}>{'FOLLOWINGS'}</span>
          <span className={inputStyles.textHeaderNumber}>{'200'}</span>
        </div>
        <div className={inputStyles.boxHeaderContent}>
          <span className={inputStyles.textHeaderTitle}>{'FOLLOWERS'}</span>
          <span className={inputStyles.textHeaderNumber}>{'1M'}</span>
        </div>
      </div>
    );
  }
}

export default BoxHeader;