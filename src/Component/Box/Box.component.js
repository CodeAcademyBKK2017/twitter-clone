import inputStyles from './Box.component.css';
import React, {Component} from 'react';
import classNames from 'classname';
import BoxHeader from './BoxHeader.component';

class Box extends Component {
  render () {
    return (
      <div >

        <div className={inputStyles.Box}>
          <BoxHeader />
          <div className={classNames(inputStyles.BoxContent, inputStyles.Shadow)}/>
        </div>

      </div>
    );
  }
}

export default Box;