import React from 'react';
import RadarChart from './index.js';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object, text, boolean, number, color, } from '@storybook/addon-knobs';


var data = [{
    name: 'Series 1',
    data: [80, 50, 30, 40, 100, 20],
  }, {
    name: 'Series 2',
    data: [20, 30, 40, 80, 20, 80],
  }, {
    name: 'Series 3',
    data: [44, 76, 78, 13, 43, 10],
  }]
var categories = ['2011', '2012', '2013', '2014', '2015', '2016']

storiesOf('RadarChart', module)
  .addDecorator(withKnobs)
  // .add('Default', () => (
  //   <RadarChart/>
  // ))
  .add('Data', () => (
    <RadarChart 
      data = {object('Data', data,'Data Knob')}
      categories = {object('Categories', categories,'Categories Knob')}
      onChange={action('change')}
    />
    )
  )
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
  