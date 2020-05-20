import React from 'react';
// import Vectorgrid from './index.js';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  boolean,
  number,
  color,
} from '@storybook/addon-knobs';
import Antpath from './index';

const options = {
  range: true,
  min: 50,
  max: 200,
  step: 4,
};

storiesOf('Antpath', module)
  .addDecorator(withKnobs)
  .add('style', () => (
    <Antpath
      pathColor={color('Color', 'black')}
      speed={number('Speed', 80, options)}
      withMarker={boolean('withMarker', false)}
    />
  ));
