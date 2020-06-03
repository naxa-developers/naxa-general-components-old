import React from 'react';
import Cards from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, files, number, color } from '@storybook/addon-knobs';
import reactImg from '../PreLoaders/ReactImage.png'

const label = 'Import Image';
const accept = '.png, .jpg, .jpeg, .svg';
const defaultValue = [reactImg];

storiesOf('Cards', module)
    .add('Default', () => <Cards mode='default' />)