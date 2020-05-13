import React from 'react';
import './button.scss';

<<<<<<< HEAD
const Button = ({ message = 'Hello world' }) => <button>{message}</button>;
=======
const Button = (props) => (
  <button onClick={props.onClick} style={props.style} disabled={props.disabled}>
    {props.label && <span>{props.label}</span>}
  </button>
);

>>>>>>> c6f3389c859955150a16b8db1ddf6b0aaf4d8c2b
export default Button;
