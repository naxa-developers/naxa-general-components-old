import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, object, color } from '@storybook/addon-knobs';
import Loading from './index'
// import { State, Store } from "@sambego/storybook-state";

storiesOf('Loader', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Loading
    />
  ))
  .add('With Label & state', () => (
    <Loading
    loaderState={boolean('State Value',true)}
    text={text('label',"Signing In...Please Wait")}
    />
  ))
  .add('with Color Changer', () => (
    <Loading
    // loaderState={boolean('State Value',true)}
    // text={text('label',"Signing In...Please Wait")}
      color={color('color','#c21c2e')}
    />
  ));
