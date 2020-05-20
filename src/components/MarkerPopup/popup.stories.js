import React from 'react';
import PopUp from './index.js';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, color } from '@storybook/addon-knobs';
import MapComponent from './SimplePopup.js';
import PopUpButton from './PopUpWithButton';

const options = {
    color: 'red'
}

storiesOf('MarkerPopup', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <PopUpButton label="With Button" onClick={action('click')} />

    ))
    .add('Customizable', () => (
        <MapComponent

            imageUrl={text("Image URL", 'https://cdn3.iconfinder.com/data/icons/basicolor-arrows-checks/24/149_check_ok-512.png')}
            popupContent={text('PopUp Content', 'I am a marker popup')}
            enableButton={boolean("Enable Button", false)}
            buttonContent={text('Button Content', 'Click Here')}
            // iconUrl={text("Marker Icon URL", "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png")}
            color={color("Text Color", "black")}

        />

    ))

