import React from 'react';
import renderer from 'react-test-renderer';
import Circle from '../Circle.component';

it('Cell: Snapshot test', () => {
  const snapshot = renderer.create(<Circle iconName="logo-twitter" type="brand" />).toJSON();
  expect(snapshot).toMatchSnapshot();
});