import React, {Component} from 'react';
import classNames from 'classnames';
import statsStyle from './Stats.style.css';

class Stats extends Component {
  render () {
    return (
      <div className={classNames(statsStyle.itemContainer)}>
        <div className={classNames(statsStyle.item, statsStyle.active)}>
          <div className={classNames(statsStyle.item__name)}>tweets</div>
          <div className={classNames(statsStyle.item__value)}>200</div>
        </div>
        <div className={classNames(statsStyle.item)}>
          <div className={classNames(statsStyle.item__name)}>photos/videos</div>
          <div className={classNames(statsStyle.item__value)}>200</div>
        </div>
        <div className={classNames(statsStyle.item)}>
          <div className={classNames(statsStyle.item__name)}>following</div>
          <div className={classNames(statsStyle.item__value)}>200</div>
        </div>
        <div className={classNames(statsStyle.item)}>
          <div className={classNames(statsStyle.item__name)}>followers</div>
          <div className={classNames(statsStyle.item__value)}>1m</div>
        </div>
      </div>
    );
  }
}

export default Stats;