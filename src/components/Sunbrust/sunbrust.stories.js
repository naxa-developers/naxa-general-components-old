import React,{Component} from 'react';

import { storiesOf } from '@storybook/react';

import { action } from '@storybook/addon-actions';



import {
    withKnobs,
    text,
    number,
    object
} from '@storybook/addon-knobs';
import Sunbrust   from "./index";
import root from './data.js';






storiesOf('Sunbrust', module).addDecorator(withKnobs)

.add('default', () => (
   <Sunbrust 
   padding={number('Corner Radius',2)}
  
   borderWidth={number('borderWidth',1)}
   root={object('data',root)}


   
   />

));