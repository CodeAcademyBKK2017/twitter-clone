import Circle from '../circle.component';
import React from 'react';
import renderer from 'react-test-renderer';
import {Icon} from 'react-fa';

describe('Circle component', () => {
  it('Circle: renders correctly', () => {
    const tree = renderer.create(<Circle><Icon name='bell-o'/></Circle>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});