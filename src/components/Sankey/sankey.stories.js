import React from 'react';
import Sankey from './index.js';
import { storiesOf, withKnobs, array } from '@storybook/react';

storiesOf('Sankey', module)
    .add('Default', () => (
        <Sankey/>
    ));