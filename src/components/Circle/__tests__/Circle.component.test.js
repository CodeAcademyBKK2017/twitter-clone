import Circle from '../Circle.component';
import React from 'react';
import renderer from 'react-test-renderer';
import Icon from 'react-ionicons';
describe('Circle group Test', () => {
  it('Circle: snapshot test', () => {
    const snapshot = renderer.create(<Circle> <Icon icon="logo-twitter"/> </Circle>).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});