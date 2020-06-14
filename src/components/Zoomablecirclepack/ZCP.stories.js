import React,{Component} from 'react';

import { storiesOf } from '@storybook/react';

import { action } from '@storybook/addon-actions';



import {
    withKnobs,
    text,
    number,
    object
} from '@storybook/addon-knobs';
import CirclePack   from "./index";
import root from './Root.js';






storiesOf('CirclePack', module).addDecorator(withKnobs)

.add('default', () => (
   <CirclePack 
   padding={number('Padding',6)}
  
   borderWidth={number('borderWidth',1)}
   root={object('data',root)}

   onChange={action('change')}
   
   />

));