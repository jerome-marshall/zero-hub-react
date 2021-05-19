import React from 'react';
import renderer from 'react-test-renderer';

import sdfsd from '..\src\components\sdfsd.js';

describe('<sdfsd />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<sdfsd />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });