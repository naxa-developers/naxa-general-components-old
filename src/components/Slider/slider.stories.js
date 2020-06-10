import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, number } from "@storybook/addon-knobs";
import MySlider from ".";

const minmax = {
  range: true,
  min: -100,
  max: 200,
  step: 10,
};

const steps = {
  range: true,
  min: 1,
  max: 50,
  step: 10,
};

storiesOf("Slider", module)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <div style={{ height: "80vh", width: "90vw" }}>
      <MySlider
        minval={number("Minimum Value", 0, minmax, "Numeric Values")}
        maxval={number("Maximum Value", 110, minmax, "Numeric Values")}
        step={number("Step", 10, steps, "Numeric Values")}
      />
    </div>
  ))
  .add("Fancy Slider", () => (
    <div style={{ height: "80vh", width: "90vw" }}>
      <MySlider
        minval={number("Minimum Value", 0, minmax, "Numeric Values")}
        maxval={number("Maximum Value", 110, minmax, "Numeric Values")}
        step={number("Step", 10, steps, "Numeric Values")}
        className="slider"
      />
    </div>
  ));
