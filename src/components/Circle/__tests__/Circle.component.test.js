import Circle from '../Circle.component';
import React from 'react';
import renderer from 'react-test-renderer';
import {Icon} from 'react-fa';
describe('Circle group Test', () => {
  it('Circle: snapshot test', () => {
    const snapshot = renderer.create(<Circle> <Icon name="test"/> </Circle>).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});