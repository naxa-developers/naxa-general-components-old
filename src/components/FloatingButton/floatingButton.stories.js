import React from 'react';
import FloatingButton from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, files, number, color } from '@storybook/addon-knobs';

const label = 'Import Image';
const accept = '.png, .jpg, .jpeg, .svg';
const defaultValue = [];

storiesOf('Floating Button', module)
    .add('Top', () => <FloatingButton text='Top' left='20' />)

    .add('Left', () => <FloatingButton text='Left' left='20' />)

    .add('Right', () => <FloatingButton text='Right' right='20' />)

    .add('Bottom', () => <FloatingButton text='Bottom' bottom='20' />)