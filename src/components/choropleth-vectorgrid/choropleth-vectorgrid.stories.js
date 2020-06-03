import React from 'react';
import Vectorgrid from './index.js';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, color, } from '@storybook/addon-knobs';

const options = {
    range: true,
    min: 0,
    max: 1,
    step: 0.1,
 };


var colors = ["#fff3d4", "#FED976", "#FEB24C", "#FD8D3C", "#FC4E2A", "#E31A1C", "#BD0026", "#800026"]
var divisions = [0,5,10,15,20,25,30];

storiesOf('Vectorgrid', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Vectorgrid/>
  ))
  .add('Style', () => (
    <Vectorgrid 
        style = {{
            opacity : number("Opacity", 1, options),
            fillOpacity : number("Fill Opacity",1, options),
            weight : number("Weight",1.5),
            color : color("Color","#FFFFFF"),
            //fillColor : color("Fill Color","#FFFFFF"),
            fill : boolean('Fill', true),
        }}
        divisions = {[number("division1", divisions[0]),number("division2", divisions[1]),number("division3", divisions[2]),number("division4", divisions[3]),number("division5", divisions[4]),number("division6", divisions[5]),number("division7", divisions[6])]}
        colorArray = {[color("Color1",colors[0]),color("Color2",colors[1]), color("Color3",colors[2]), color("Color4",colors[3]), color("Color5",colors[4]), color("Color6",colors[5]), color("Color7",colors[6]), color("Color8",colors[7])]}
        onClick={action('click')}
      />
  ))
  .add('Data', () => (
    <Vectorgrid 
        choroplethData = 
        {[
            {id:1, count:number("Province 1",1)}, 
            {id:2, count:number("Province 2",2)}, 
            {id:3, count:number("Bagmati Province",3)}, 
            {id:4, count:number("Gandaki Province",1)}, 
            {id:5, count:number("Province 5",10)}, 
            {id:6, count:number("Karnali Province",8)}, 
            {id:7, count:number("Sudurpaschim Province",3)}
        ]}
      onChange={action('change')}
      />
  ))


//   .add('With Outline', () => (
//     <Button
//       label="Ouline Button"
//       style={{ background: 'transparent', border: '3px solid #fecd43' }}
//       onClick={action('click')}
//     />
//   ))
//   .add('With Rounder Corners', () => (
//     <Button
//       label="Rounded Button"
//       style={{ borderRadius: '15px' }}
//       onClick={action('click')}
//     />
//   ))
//   .add('Disabled', () => (
//     <Button
//       disabled={boolean('Disabled', true)}
//       label="Disabled Button"
//       onClick={action('click')}
//     />
//   ));
