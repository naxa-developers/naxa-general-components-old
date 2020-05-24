import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    text,
    boolean,
    number,
    color,
    object,
    optionsKnob,
} from '@storybook/addon-knobs';
import MySankey from './index';

var sankeyData = {
    "nodes": [
        {
            "id": "John",
            "color": "hsl(2, 70%, 50%)"
        },
        {
            "id": "Raoul",
            "color": "hsl(205, 70%, 50%)"
        },
        {
            "id": "Jane",
            "color": "hsl(262, 70%, 50%)"
        },
        {
            "id": "Marcel",
            "color": "hsl(202, 70%, 50%)"
        },
        {
            "id": "Ibrahim",
            "color": "hsl(315, 70%, 50%)"
        },
        {
            "id": "Junko",
            "color": "hsl(78, 70%, 50%)"
        }
    ],
    "links": [
        {
            "source": "Ibrahim",
            "target": "Raoul",
            "value": 50
        },
        {
            "source": "Ibrahim",
            "target": "Junko",
            "value": 178
        },
        {
            "source": "Ibrahim",
            "target": "Jane",
            "value": 163
        },
        {
            "source": "Jane",
            "target": "Marcel",
            "value": 131
        },
        {
            "source": "Jane",
            "target": "Raoul",
            "value": 123
        },
        {
            "source": "Jane",
            "target": "John",
            "value": 75
        },
        {
            "source": "Raoul",
            "target": "John",
            "value": 154
        },
        {
            "source": "Raoul",
            "target": "Marcel",
            "value": 99
        },
        {
            "source": "Raoul",
            "target": "Junko",
            "value": 182
        },
        {
            "source": "John",
            "target": "Marcel",
            "value": 87
        }
    ]
}

storiesOf('Sankey-nivo', module).addDecorator(withKnobs)
    .add('Default', () => 
    <div style={{ height: '80vh', width: '90vw' }}>
    <MySankey
     enableLabels = {boolean('Enable', true, 'Label Knobs')}     
     labelColor={color('Label Color', 'white', 'Label Knobs')}
     labelOrientation = {optionsKnob('Label Orientation', {Horizontal: 'horizontal', Vertical: 'vertical'}, 'horizontal', {display: 'inline-radio'}, 'Label Knobs')}
     labelPosition = {optionsKnob('Label Position', {Outside: 'outside', Inside: 'inside'}, 'outside', {display: 'inline-radio'}, 'Label Knobs')}
     isanimate={boolean('Animate', true, 'Animation')}
     data={object('Data', sankeyData,'Data Knob')}
     />
     </div>
     );