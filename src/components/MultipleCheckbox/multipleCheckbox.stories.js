import React from 'react';
import Dropdown from './index.js';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean,object } from '@storybook/addon-knobs';
import MultipleCheckbox from './MultipleCheckbox.js';
// import { State, Store } from "@sambego/storybook-state";


storiesOf('MultipleCheckboxDropdown', module)
  .addDecorator(withKnobs)
  .add('With Data and Placeholder', () => (
    <MultipleCheckbox
    placeholder={text("Placeholder","Select Province")}
    data={object("data",[
      { value: 1, label: 'Province 1' },
      { value: 2, label: 'Province 2' },
      { value: 3, label: 'Province 3' },
      { value: 4, label: 'Province 4' },
      { value: 5, label: 'Province 5' },
      { value: 6, label: 'Province 6' },
      { value: 7, label: 'Province 7' },
    ])}
    />
  ))
  .add('With StyleClass', () => (
    <MultipleCheckbox style={object("css style",{width:"200px"})} styleClass={text("style className")} onClick={action('click')} />
  ))

