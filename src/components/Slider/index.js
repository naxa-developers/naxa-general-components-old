import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 300,
        height: 300,
        padding: 50,
    },
});

function valuetext(value) {
    return `${value}°C`;
}

export default function MySlider({
    minval = 20,
    maxval = 100,
    step = 10,
    isdisabled = false,
    orientation = 'horizontal',
    track = 'normal',
    labeldisplaytype = 'auto',
    initialvalue = [30],
    thumbbackground = '#fff',
    valuelabelbackground = '#999',
    valuelabelcolor = '#000',
    trackheight = 2,
    rootheight = 2,
    railbackground = '#d8d8d8',
    railheight = 2,
    railopacity = 0.5,
    markbackground = '#bfbfbf',
    markheight = 8,
    markwidth = 1,
    marktopmargin = -3,
    rootcolor = '#3a8589',
    marks
}) {
    const CustomSlider = withStyles({
        root: {
          color: rootcolor,
          height: rootheight,
          padding: "15px 0"
        },
        thumb: {
          backgroundColor: thumbbackground,
        },
        active: {},
        valueLabel: {
          "& *": {
            background: valuelabelbackground,
            color: valuelabelcolor
          }
        },
        track: {
          height: trackheight
        },
        rail: {
          height: railheight,
          opacity: railopacity,
          backgroundColor: railbackground
        },
        mark: {
          backgroundColor: markbackground,
          height: markheight,
          width: markwidth,
          marginTop: marktopmargin
        }
      })(Slider);
    const classes = useStyles();
    const [value, setValue] = React.useState(initialvalue);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue);
    };

    return (
        <div className={classes.root}>
            <CustomSlider
                value={value}
                getAriaValueText={valuetext}
                aria-labelledby="custom-slider"
                valueLabelDisplay={labeldisplaytype}
                step={step}
                marks={marks}
                min={minval}
                max={maxval}
                disabled={isdisabled}
                onChange={handleChange}
                orientation={orientation}
                track={track}
            />
        </div>
    );
}