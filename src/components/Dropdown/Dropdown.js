import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({
  value,
  data,
  placeholder,
  styleClass,
  style,
  onChange,
}) => {
  const handleChange = event => {
    const values = event.target.value;
    onChange(values);
  };

  return (
    <div className={`form-group ${styleClass}`} >
      <select
        value={value}
        className="form-control"
        style={style}
        onChange={handleChange}
      >
        <option value="">{placeholder}</option>
        {data.map((item, key) => (
          <option key={Math.random()} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

Dropdown.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ).isRequired,
  styleClass: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  data : [
    { value: 1, label: 'Orange' },
    { value: 2, label: 'Mango' },
    { value: 3, label: 'Banana' },
    { value: 4, label: 'Apple' },
  ],
  value: '',
  styleClass: '',
  placeholder: 'Select Item',
};

export default Dropdown;
