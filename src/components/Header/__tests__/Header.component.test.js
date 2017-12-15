import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../Header.component';

it('Cell: Snapshot test', () => {
  const snapshot = renderer.create(<Header />).toJSON();
  expect(snapshot).toMatchSnapshot();
});