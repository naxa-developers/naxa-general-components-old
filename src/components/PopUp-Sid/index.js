import React from 'react';

const PopUp = ({ withCheckbox, label }) => (
    <p>
        {withCheckbox && <input type="checkbox"></input>}
        {label}
    </p>
);

export default PopUp;
