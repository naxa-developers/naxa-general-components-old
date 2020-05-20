import React from 'react';

const MarkerPopup = ({ withCheckbox, label }) => (
    <p>
        {withCheckbox && <input type="checkbox"></input>}
        {label}
    </p>
);

export default MarkerPopup;
