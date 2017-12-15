import SideMenu from '../sidebarmenu.component';
import React from 'react';
import renderer from 'react-test-renderer';

describe('SideMenu component', () => {
  it('SideMenu: renders correctly', () => {
    const tree = renderer.create(<SideMenu />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});