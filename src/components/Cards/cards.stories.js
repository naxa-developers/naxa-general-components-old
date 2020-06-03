import React from 'react';
import Cards from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, files, number, color, text } from '@storybook/addon-knobs';
import reactImg from '../PreLoaders/ReactImage.png'

const label = 'Import Image';
const accept = '.png, .jpg, .jpeg, .svg';
const defaultValue = [reactImg];

storiesOf('Cards', module)
    .add('Default', () => <Cards mode='default' />)

    .addDecorator(withKnobs)
    .add('With Image', () => 
        <Cards mode='Image' 
            image={files(label, accept, defaultValue)} 
            title={text('Title','ReactJS')}
            description={text('Description','ReactJS is JavaScript library used for building reusable UI components.')}
            tag={text('Tag','ReactJS')}
        />)