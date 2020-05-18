import React from 'react';

const Tab = ({ withCheckbox, label }) => (
    <p>
        {withCheckbox && <input type="checkbox"></input>}
        {label}
    </p>
);

export default Tab;
