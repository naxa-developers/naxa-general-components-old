import React from 'react';
// import Vectorgrid from './index.js';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
    withKnobs,
    text,
    boolean,
    number,
    color,
    array,
} from '@storybook/addon-knobs';
import Pagination from './index'
import Wrapper from './Wrapper';

const options = {
    range: true,
    min: 50,
    max: 200,
    step: 4,
};

storiesOf('Pagination', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Wrapper
        data={array("Data",["Harka Man","Birkhe", "Bala Bahadhur", "Shyam Sundar","Ram Bahadur","Rata mate Kaila", "Saila Baje"])}
        numberInEachPage={number("Number of data per page",2)}
        color={text("Color","White")}
        backgroundColor={text("BackgroundColor for inactive page","transparent")}


        />
    ));
