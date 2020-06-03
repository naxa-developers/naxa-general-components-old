import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';
import { default as Input } from './index';

storiesOf('InputField', module)
  .add('Default', () => {
    return <Input type={'text'} />;
  })

  .add('With placeholder', () => {
    return <Input type={'text'} placeholder={'Name'} />;
  })

  .add('With predefined value', () => {
    const [name, setName] = useState('Hello World');
    return (
      <Input
        type={'text'}
        placeholder={'Name'}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    );
  })

  .add('Disabled', () => {
    return <Input type={'text'} placeholder={'Name'} disabled={true} />;
  })
  .add('Password', () => {
    return <Input type={'password'} placeholder={'Password'} />;
  });
