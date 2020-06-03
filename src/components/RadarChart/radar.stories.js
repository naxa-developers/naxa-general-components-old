import React from 'react';
import RadarChart from './index.js';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  object,
  text,
  boolean,
  number,
  color,
} from '@storybook/addon-knobs';

var data = [
  {
    name: 'Series 1',
    data: [80, 50, 30, 40, 100, 20],
  },
  {
    name: 'Series 2',
    data: [20, 30, 40, 80, 20, 80],
  },
  {
    name: 'Series 3',
    data: [44, 76, 78, 13, 43, 10],
  },
];
var categories = ['2011', '2012', '2013', '2014', '2015', '2016'];
//var colors = ["#008ffb","#00e396","#feb019","#ff4560","#775dd0"]
var colors = [
  'rgba(55, 61, 63,1)',
  'rgba(0, 227, 150,1)',
  'rgba(254, 176, 25,1)',
  'rgba(255, 69, 96,1)',
  'rgba(119, 93, 208,1)',
];
storiesOf('RadarChart', module)
  .addDecorator(withKnobs)
  // .add('Default', () => (
  //   <RadarChart/>
  // ))
  .add('Data', () => (
    <RadarChart
      data={object('Data', data, 'Data Knob')}
      categories={object('Categories', categories, 'Categories Knob')}
      colors={[
        color('Color1', colors[0]),
        color('Color2', colors[1]),
        color('Color3', colors[2]),
        color('Color4', colors[3]),
      ]}
      onChange={action('change')}
    />
  ));
//   .add('Style', () => (
//     <RadarChart
//         style = {{
//             opacity : number("Opacity", 1, options),
//             fillOpacity : number("Fill Opacity",1, options),
//             weight : number("Weight",1.5),
//             color : color("Color","#FFFFFF"),
//             //fillColor : color("Fill Color","#FFFFFF"),
//             fill : boolean('Fill', true),
//         }}
//         onClick={action('click')}
//       />
//   ))
