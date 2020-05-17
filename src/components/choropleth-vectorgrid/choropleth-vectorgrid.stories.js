import React from 'react';
import Vectorgrid from './index.js';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, color } from '@storybook/addon-knobs';

storiesOf('Vectorgrid', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Vectorgrid/>
  ))
  .add('Style', () => (
    <Vectorgrid 
        style = {{
            opacity : number("Opacity", 1),
            fillOpacity : number("Fill Opacity",1),
            weight : number("Weight",1.5),
            color : color("Color","#FFFFFF"),
            fillColor : color("Fill Color","#FFFFFF"),
            fill : boolean('Fill', true),
        }}
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
