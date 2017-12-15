import Menu from '../menu.component';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Menu component', () => {
  it('Menu: renders correctly', () => {
    const tree = renderer.create(<Menu />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});