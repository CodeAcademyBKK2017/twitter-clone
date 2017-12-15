import SubHeader from '../SubHeader.component';
import React from 'react';
import renderer from 'react-test-renderer';
describe('SubHeader group Test', () => {
  it('SubHeader: snapshot test', () => {
    const snapshot = renderer.create(<SubHeader />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});