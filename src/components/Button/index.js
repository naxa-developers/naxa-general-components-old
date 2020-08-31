import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = (props) => (
  <button onClick={props.onClick} style={props.style} disabled={props.disabled}>
    {props.label && <span>{props.label}</span>}
  </button>
);

Button.propTypes = {
  /**
   * Disables button
   */
  disabled: PropTypes.bool,
  /**
   *  For customizing button
   */
  style: PropTypes.object,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

Button.defaultProps = {
  label: 'My Button',
};

export default Button;
