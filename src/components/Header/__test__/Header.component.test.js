import Header from '../Header.component';
import React from 'react';
import renderer from 'react-test-renderer';
describe('Header group Test', () => {
  it('Header: snapshot test', () => {
    const snapshot = renderer.create(<Header />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});