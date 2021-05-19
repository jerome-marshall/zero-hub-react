import React from 'react';
import renderer from 'react-test-renderer';

import asdasd from '..\src\components\asdasd.js';

describe('<asdasd />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<asdasd />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });