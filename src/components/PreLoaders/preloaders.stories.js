import React from 'react';
import Preloaders from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, files, number, color } from '@storybook/addon-knobs';
import Default from './ReactImage.png'

const label = 'Import Image';
const accept = '.png, .jpg, .jpeg, .svg';
const defaultValue = [Default];

storiesOf('Pre Loaders', module)
    .add('Default Circular Loader', () => <Preloaders className='preloader' />)

    .addDecorator(withKnobs)
    .add('Circular Loader', () => <Preloaders
        color={color('Color','red')}
        width={number('Width', 60 )} 
        height={number('Height', 60 )}
        borderBackground={color('Border Background Color', 'blue')}
        borderWidth={number('Border Width', 3)}
        className='preloader' 
    />)

    .addDecorator(withKnobs)
    .add('Add image', () => <Preloaders 
        className='custom-preloader'
        image={files(label, accept, defaultValue)}
        width={number('Width', 120 )} 
        height={number('Height', 120 )}
    />)
