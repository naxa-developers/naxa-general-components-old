import React from 'react';

const styles = {
  border: 'none',
  borderBottom: '1px solid',
  borderColor: 'seagreen',
};

const InputField = ({ type, placeholder, value, onChange, disabled }) => {
  return (
    <input
      style={styles}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default InputField;
