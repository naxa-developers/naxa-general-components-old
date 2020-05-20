import React from 'react';

import { storiesOf } from '@storybook/react';
import FormMap from './index';

storiesOf('FormMap', module)
  .add('Searchbox', () => <FormMap getUserLocation='searchbox' />)
  .add('Geo location', () => <FormMap getUserLocation='geolocate' />)
  .add('Draggable Marker', () => <FormMap getUserLocation='marker' />);
