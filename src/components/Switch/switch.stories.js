import React from 'react';
import Switch from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, files, number, color } from '@storybook/addon-knobs';

storiesOf('Switch', module)
    .add('Default Switch', () => <Switch sliderClass='slider' />)

    .addDecorator(withKnobs)
    .add('Rounded', () => <Switch
        sliderClass='slider round'
    />)

    .addDecorator(withKnobs)
    .add('With Label', () => <Switch
        sliderClass='slider round'
        showLabel={true}
    // onColor={color("Slider On Color", "black")}

    />)
