import React from 'react';
import List from './listCollection.js';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text,number, color, boolean } from '@storybook/addon-knobs';

storiesOf('List/Collection', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <List />
  ))
  .add('Active Items', () => (
    <List class = "" 
    activeItem = {number("Active Item", 0, {min: 0, max: 4})}
    onChange={action('change')}
    />
  ));