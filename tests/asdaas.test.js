import React from 'react';
import renderer from 'react-test-renderer';

import asdaas from '..\src\component\asdaas.js';

describe('<asdaas />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<asdaas />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });