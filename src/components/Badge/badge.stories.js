import React from 'react';
import Badge from './index.js';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean,number,color } from '@storybook/addon-knobs';

import ButtonReadme from './README.md';


storiesOf('Badge', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      // Show readme before story
      content: ButtonReadme,
      // Show readme at the addons panel
      sidebar: ButtonReadme,
    },
  })
  .add('Default', () => (
    <Badge/>
  ))
  .add('Label & Notification Count', () => (
    <Badge
      label={text('Label', 'Mail')}
      notification_count={number('Notification Count', 5)}
      onClick={action('click', 'hello')}
    />
  ))
  .add('With Different Color', () => (
    <Badge 
    color={color("Badge Color", "#337ab7")}
    borderColor={color("Badge Border Color", "#2e6da4")}
    label={text('label', 'Mail')}
    notification_count={number('Notification Count', 5)}
    />
  ));
