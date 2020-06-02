import React from 'react';
import PopUp from './index.js';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Test from './Test.js';
import MapOne from './MapOne.js';

storiesOf('PopUp-Sid', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Test
            test={'siddu'}
            label={text('label', 'My Button')}
            onClick={action('click', 'hello')}
        />
    ))
    .add('With Button', () => (
        <MapOne label="With Button" onClick={action('click')} />
    ))

    .add('With Outline', () => (
        <Button
            label="Ouline Button"
            style={{ background: 'transparent', border: '3px solid #fecd43' }}
            onClick={action('click')}
        />
    ))
    .add('With Rounder Corners', () => (
        <Button
            label="Rounded Button"
            style={{ borderRadius: '15px' }}
            onClick={action('click')}
        />
    ))
    .add('Disabled', () => (
        <Button
            disabled={boolean('Disabled', true)}
            label="Disabled Button"
            onClick={action('click')}
        />
    ));
