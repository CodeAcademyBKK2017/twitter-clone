import Search from '../Search.component';
import React from 'react';
import renderer from 'react-test-renderer';
describe('Search group Test', () => {
  it('Search: snapshot test', () => {
    const snapshot = renderer.create(<Search />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});