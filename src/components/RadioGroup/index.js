import React from 'react';

const RadioGroup = ({
  alignLabel,
  options,
  selectedOption,
  onClick,
  value,
}) => {
  const radio = options.map((item) => {
    const align = alignLabel;

    return (
      <>
        {align === 'left' ? (
          <>
            <label>{item.label}</label>
            <input
              type='radio'
              value={item.value}
              checked={selectedOption === item.value}
              onClick={onClick}
            />
          </>
        ) : (
          <>
            <input
              type='radio'
              value={item.value}
              checked={selectedOption === item.value}
              onClick={onClick}
            />
            <label>{item.label}</label>
          </>
        )}
      </>
    );
  });
  return <>{radio}</>;
};

export default RadioGroup;
