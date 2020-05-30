import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    boolean,
    number,
    color,
    array,
    optionsKnob,
} from '@storybook/addon-knobs';
import MySlider from './index';

const marks = [
    {
        value: 0,
        label: '0°C',
    },
    {
        value: 20,
        label: '20°C',
    },
    {
        value: 37,
        label: '37°C',
    },
    {
        value: 100,
        label: '100°C',
    },
];

const opacity = {
    range: true,
    min: 0,
    max: 1,
    step: 0.1,
};

const minmax = {
    range: true,
    min: -100,
    max: 200,
    step: 10,
};

const steps = {
    range: true,
    min: 1,
    max: 50,
    step: 10,
};

storiesOf('Slider', module).addDecorator(withKnobs)
    .add('Default', () =>
        <div style={{ height: '80vh', width: '90vw' }}>
            <MySlider
                marks={boolean('Marks', true, 'Common')}
                isdisabled={boolean('Disable', false, 'Common')}
                thumbbackground={color('Thumb Background', '#fff', 'Colors')}
                valuelabelbackground={color('Value Label Background', '#999', 'Colors')}
                railbackground={color('Rail Background', '#d8d8d8', 'Colors')}
                markbackground={color('Mark Background', '#bfbfbf', 'Colors')}
                rootcolor={color('Root Color', '#3a8589', 'Colors')}
                valuelabelcolor={color('Value Label Color', '#000', 'Colors')}
                orientation={optionsKnob('Orientation', { Horizontal: 'horizontal', Vertical: 'vertical' }, 'horizontal', { display: 'inline-radio' }, 'Options')}
                //track={optionsKnob('Track', { Normal: 'normal', False: false, Inverted: 'inverted' }, 'normal', { display: 'inline-radio' }, 'Options')}
                labeldisplaytype={optionsKnob('Label Display Type', { On: 'on', Off: 'off', Auto: 'auto' }, 'auto', { display: 'inline-radio' }, 'Options')}
                railopacity={number('Rail Opacity', 0.5, opacity, 'Numeric Values')}
                minval={number('Minimum Value', 0, minmax, 'Numeric Values')}
                maxval={number('Maximum Value', 110, minmax, 'Numeric Values')}
                step={number('Step', 10, steps, 'Numeric Values')}
                trackheight={number('Track Height', 2, {}, 'Numeric Values')}
                railheight={number('Rail Height', 2, {}, 'Numeric Values')}
                markheight={number('Mark Height', 8, {}, 'Numeric Values')}
                markwidth={number('Mark Width', 1, {}, 'Numeric Values')}
                marktopmargin={number('Mark Top Margin', -3, {}, 'Numeric Values')}
            />
        </div>
    ).add('Range Slider', () =>
        <div style={{ height: '80vh', width: '90vw' }}>
            <MySlider initialvalue={[20,40]}
                marks={boolean('Marks', true, 'Common')}
                isdisabled={boolean('Disable', false, 'Common')}
                thumbbackground={color('Thumb Background', '#fff', 'Colors')}
                valuelabelbackground={color('Value Label Background', '#999', 'Colors')}
                railbackground={color('Rail Background', '#d8d8d8', 'Colors')}
                markbackground={color('Mark Background', '#bfbfbf', 'Colors')}
                rootcolor={color('Root Color', '#3a8589', 'Colors')}
                valuelabelcolor={color('Value Label Color', '#000', 'Colors')}
                orientation={optionsKnob('Orientation', { Horizontal: 'horizontal', Vertical: 'vertical' }, 'horizontal', { display: 'inline-radio' }, 'Options')}
                //track={optionsKnob('Track', { Normal: 'normal', False: false, Inverted: 'inverted' }, 'normal', { display: 'inline-radio' }, 'Options')}
                labeldisplaytype={optionsKnob('Label Display Type', { On: 'on', Off: 'off', Auto: 'auto' }, 'auto', { display: 'inline-radio' }, 'Options')}
                railopacity={number('Rail Opacity', 0.5, opacity, 'Numeric Values')}
                minval={number('Minimum Value', 0, minmax, 'Numeric Values')}
                maxval={number('Maximum Value', 110, minmax, 'Numeric Values')}
                step={number('Step', 10, steps, 'Numeric Values')}
                trackheight={number('Track Height', 2, {}, 'Numeric Values')}
                railheight={number('Rail Height', 2, {}, 'Numeric Values')}
                markheight={number('Mark Height', 8, {}, 'Numeric Values')}
                markwidth={number('Mark Width', 1, {}, 'Numeric Values')}
                marktopmargin={number('Mark Top Margin', -3, {}, 'Numeric Values')}
            />
        </div>
    ).add('Custom Marks', () =>
        <div style={{ height: '80vh', width: '90vw' }}>
            <MySlider marks={marks}
                isdisabled={boolean('Disable', false, 'Common')}
                thumbbackground={color('Thumb Background', '#fff', 'Colors')}
                valuelabelbackground={color('Value Label Background', '#999', 'Colors')}
                railbackground={color('Rail Background', '#d8d8d8', 'Colors')}
                markbackground={color('Mark Background', '#bfbfbf', 'Colors')}
                rootcolor={color('Root Color', '#3a8589', 'Colors')}
                valuelabelcolor={color('Value Label Color', '#000', 'Colors')}
                orientation={optionsKnob('Orientation', { Horizontal: 'horizontal', Vertical: 'vertical' }, 'horizontal', { display: 'inline-radio' }, 'Options')}
                //track={optionsKnob('Track', { Normal: 'normal', False: false, Inverted: 'inverted' }, 'normal', { display: 'inline-radio' }, 'Options')}
                labeldisplaytype={optionsKnob('Label Display Type', { On: 'on', Off: 'off', Auto: 'auto' }, 'auto', { display: 'inline-radio' }, 'Options')}
                railopacity={number('Rail Opacity', 0.5, opacity, 'Numeric Values')}
                minval={number('Minimum Value', 0, minmax, 'Numeric Values')}
                maxval={number('Maximum Value', 110, minmax, 'Numeric Values')}
                step={number('Step', 10, steps, 'Numeric Values')}
                trackheight={number('Track Height', 2, {}, 'Numeric Values')}
                railheight={number('Rail Height', 2, {}, 'Numeric Values')}
                markheight={number('Mark Height', 8, {}, 'Numeric Values')}
                markwidth={number('Mark Width', 1, {}, 'Numeric Values')}
                marktopmargin={number('Mark Top Margin', -3, {}, 'Numeric Values')}
            />
        </div>
    );
