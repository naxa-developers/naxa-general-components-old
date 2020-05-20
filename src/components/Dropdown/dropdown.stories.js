import React from 'react';
import Dropdown from './index.js';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean,object } from '@storybook/addon-knobs';
// import { State, Store } from "@sambego/storybook-state";


storiesOf('Dropdown', module)
  .addDecorator(withKnobs)
  .add('With Data and Placeholder', () => (
    <Dropdown
    placeholder={text("Placeholder","Select Item")}
    data={object("data",[
      { value: 1, label: 'Orange' },
      { value: 2, label: 'Mango' },
      { value: 3, label: 'Banana' },
      { value: 4, label: 'Apple' },
    ])}
    />
  ))
  .add('With StyleClass', () => (
    <Dropdown style={object("css style",{width:"200px",padding:"10px"})} styleClass={text("style className")} onClick={action('click')} />
  ))

