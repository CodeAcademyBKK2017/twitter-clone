import React from 'react';
import renderer from 'react-test-renderer';
import Search from '../Search.component';

it('Cell: Snapshot test', () => {
  const snapshot = renderer.create(<Search />).toJSON();
  expect(snapshot).toMatchSnapshot();
});