import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  number,
  color,
  object
} from '@storybook/addon-knobs';
import TreeMap from './index'
import data from './data'
var i=0;
storiesOf('TreeMap', module)
  .addDecorator(withKnobs)
  .add('default', () =>{
 
  return (
    <div style={{ height: 400, width: 600 }}  >
      <button onClick={()=>{
        console.log(data)
      }}>Click Me and see in console for data structure</button>
      <TreeMap
 
      innerPadding={number("InnterPadding",2)}
      outerPadding={number("OuterPadding",3)}
      data={object("Data",data,'Data Knob')}
      // data={data}
    />

    </div>

  )}
  );