import React from 'react';
// import Vectorgrid from './index.js';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Snakey from './index'
import {
  withKnobs,
  text,
  boolean,
  number,
  color,
} from '@storybook/addon-knobs';


const options = {
  range: true,
  min: 50,
  max: 200,
  step: 4,
};

storiesOf('Snakey', module)
  .addDecorator(withKnobs)
  .add('default', () => (

    <Snakey/> 
  ));
