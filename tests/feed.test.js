import React from 'react';
import renderer from 'react-test-renderer';

import feed from '..\src\components\feed.js';

describe('<feed />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<feed />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });