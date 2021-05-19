import React from 'react';
import renderer from 'react-test-renderer';

import Home from '..\src\components\Home.js';

describe('<Home />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<Home />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });