import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  number,
  color,
} from '@storybook/addon-knobs';
import TreeMap from './index'
import data from './data'

storiesOf('TreeMap', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <div style={{ height: 400, width: 600 }}    >
      <button onClick={()=>{
        console.log(data)
      }}>Click Me and see in console for data structure</button>
      <TreeMap
      innerPadding={number("InnterPadding",2)}
      outerPadding={number("OuterPadding",3)}
    />

    </div>

  ));