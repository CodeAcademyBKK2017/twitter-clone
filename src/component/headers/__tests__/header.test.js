import Header from '../header.component';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Header component', () => {
  it('Header: renders correctly', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});