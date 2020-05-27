import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';
import RadioGroup from './index';

const options = [
  { label: 'radio1', value: 'radio1' },
  { label: 'radio2', value: 'radio2' },
  { label: 'radio3', value: 'radio3' },
];

storiesOf('RadioGroup', module).add('RadioGroup', () => {
  const [selectedOption, setSelectedOption] = useState('');
  return (
    <RadioGroup
      alignLabel='right'
      options={options}
      selectedOption={selectedOption}
      onClick={(e) => setSelectedOption(e.target.value)}
    />
  );
});
