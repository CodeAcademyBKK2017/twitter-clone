import Search from '../search.component';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Search component', () => {
  it('Search: renders correctly', () => {
    const tree = renderer.create(<Search />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});