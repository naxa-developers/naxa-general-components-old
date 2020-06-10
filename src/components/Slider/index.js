import React from "react";
import "./slider.scss";

export default function MySlider({
  minval = 0,
  maxval = 100,
  step = 10,
  className = "",
}) {
  const initialvalue = (minval + maxval) / 2;
  const [value, setValue] = React.useState(initialvalue);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <input
        className={className}
        type="range"
        min={minval}
        max={maxval}
        step={step}
        defaultValue={initialvalue}
        onChange={handleChange}
      ></input>
      <h3>{value}</h3>
    </>
  );
}
