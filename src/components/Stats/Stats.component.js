import React, {Component} from 'react';
import classNames from 'classnames';
import statsStyle from './Stats.style.css';

class Stats extends Component {
  render () {
    return (
      <div className={classNames(statsStyle.navContainer)}>
        <div className={classNames(statsStyle.nav, statsStyle.active)}>
          <div className={classNames(statsStyle.nav__name)}>tweets</div>
          <div className={classNames(statsStyle.nav__value)}>200</div>
        </div>
        <div className={classNames(statsStyle.nav)}>
          <div className={classNames(statsStyle.nav__name)}>photos/videos</div>
          <div className={classNames(statsStyle.nav__value)}>200</div>
        </div>
        <div className={classNames(statsStyle.nav)}>
          <div className={classNames(statsStyle.nav__name)}>following</div>
          <div className={classNames(statsStyle.nav__value)}>200</div>
        </div>
        <div className={classNames(statsStyle.nav)}>
          <div className={classNames(statsStyle.nav__name)}>followers</div>
          <div className={classNames(statsStyle.nav__value)}>1m</div>
        </div>
      </div>
    );
  }
}

export default Stats;