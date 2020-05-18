import React from 'react';
import Select from './index.js';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

const noOption = [];
const options = [
  { label: 'Option 1', value: 1 },
  { label: 'Option 2', value: 2 },
];

const nestedOptions = [
  {
    label: 'My Option 1',
    options: [
      { label: 'Option 1', value: 1 },
      { label: 'Option 2', value: 2 },
    ],
  },
  {
    label: 'My Option 2',
    options: [
      { label: 'Option 3', value: 3 },
      { label: 'Option 4', value: 4 },
    ],
  },
];

storiesOf('Select', module)
  .add('Default', () => (
    <Select options={options} onChange={action('Option Selected')} />
  ))
  .add('With Nested Options', () => (
    <Select options={nestedOptions} onChange={action('Option Selected')} />
  ))
  .add('With Search', () => (
    <Select
      withSearchBar
      options={options}
      onChange={action('Option Selected')}
    />
  ))

  .add('Multi Select', () => (
    <Select
      isMultiSelect
      options={options}
      onChange={action('Option Selected')}
    />
  ))
  .add('Multi Select With Custom Title', () => (
    <Select
      title='My Select'
      isMultiSelect
      options={options}
      onChange={action('Option Selected')}
    />
  ))
  .add('Multi Select With Nested Options', () => (
    <Select
      isMultiSelect
      options={nestedOptions}
      onChange={action('Option Selected')}
    />
  ))
  .add('Multi Select With Search', () => (
    <Select
      isMultiSelect
      withSearchBar
      options={nestedOptions}
      onChange={action('Option Selected')}
    />
  ))
  .add('With Loader', () => (
    <Select
      loader={noOption.length === 0}
      isMultiSelect
      withSearchBar
      options={noOption}
      onChange={action('Option Selected')}
    />
  ));
