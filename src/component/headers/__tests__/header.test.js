import Header from '../header.component';
import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

describe('Header component', () => {
  it('Header: renders correctly', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Header: openBar is work', () => {
    const bar = shallow(<Header />).instance();
    this.openSide();
    expect(bar.state.sideBar).toEqual(false);
  });
});