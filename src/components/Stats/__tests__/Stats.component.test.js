import React from 'react';
import renderer from 'react-test-renderer';
import Stats from '../Stats.component';

it('Cell: Snapshot test', () => {
  const snapshot = renderer.create(<Stats />).toJSON();
  expect(snapshot).toMatchSnapshot();
});