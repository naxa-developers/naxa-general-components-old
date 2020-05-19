import React from 'react';
import ProgressBar from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number, color } from '@storybook/addon-knobs';

storiesOf('Progress Bar', module)
    .add('Default', () => (
        <ProgressBar />
    ))
    .addDecorator(withKnobs)
    .add('With Parameters', () => (
        <ProgressBar 
            bgColor={color('Color','orange')}
            progressClassName={'wrapper-styles'}
            labelClassName={'label-styles'}
            completed={number('Progress Value',60)}
            wrapperClassName={action('custom-class')}
        />
    ))