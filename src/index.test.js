import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.js';

describe('Test ReactDom', () => {
  it('', () => {
    expect(ReactDOM.render).toHaveBeenCalledWith(<App />, 'someElement');
  });
});
