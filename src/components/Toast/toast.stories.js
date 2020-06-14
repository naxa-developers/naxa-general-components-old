import React from 'react';
import Toast from './index.js';
import { storiesOf } from '@storybook/react';
import Wrapper from './Wrapper.js';
import {
    withKnobs,
    text,
    boolean,
    number,
    color,
    array,
    optionsKnob,
    select,
    radios,
    optionsKnob as options
} from '@storybook/addon-knobs';






storiesOf('Toast', module).addDecorator(withKnobs). add('Bottomleft', () => (
    <Wrapper bg={color("color", 'red')}  position="bottomleft" />
));
storiesOf('Toast', module).add('Topleft', () => (
    <Wrapper bg={color("color", 'red')}  position='topleft' />
));

storiesOf('Toast', module).add('Bottomright', () => (
    <Wrapper bg={color("color", 'red')}  position='bottomright' />
));

storiesOf('Toast', module).add('Topright', () => (
    <Wrapper bg={color("color", 'red')}  position='topright' />
));
