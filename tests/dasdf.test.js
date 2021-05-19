import React from 'react';
import renderer from 'react-test-renderer';

import dasdf from '..\src\component\dasdf.js';

describe('<dasdf />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<dasdf />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });