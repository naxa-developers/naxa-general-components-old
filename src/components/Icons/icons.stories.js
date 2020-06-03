import React from 'react';
import HospitalIcon from './Icons/HospitalIcon';
import LabIcon from './Icons/LabIcon';
import InfectedIcon from './Icons/Infected';
import HealthWorkerIcon from './Icons/HealthWorker';
import InfectionControlIcon from './Icons/InfectionControl';
import DoctorIcon from './Icons/Doctor';
import TestingIcon from './Icons/Testing';
import BoreholeIcon from "./Icons/Borehole";
import BulbInnovationIcon from "./Icons/bulbIcon";
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text,number, color, boolean } from '@storybook/addon-knobs';

storiesOf('Icons', module)
  .addDecorator(withKnobs)
  .add('Hospital', () => (
    <HospitalIcon 
    type={select('Type', ["default", "circular"],"default")}
    iconColor = {color("Color","#FF0000")}
    height = {number("height",20)}
    background = {boolean("Background",false)}
    backgroundColor = {color("Background Color","#FFFFFF")}
    onChange={action('change')}
    />
  ))
  .add('Lab', () => (
    <LabIcon class = "" 
    // activeItem = {number("Active Item", 0, {min: 0, max: 4})}
    // onChange={action('change')}
    />
  ))
  .add('Infected', () => (
    <InfectedIcon />
  ))
  .add('Health Worker', () => (
    <HealthWorkerIcon type="circular"/>
  ))
  .add('Infection Control', () => (
    <InfectionControlIcon />
  ))
  .add('Doctor', () => (
    <DoctorIcon />
  ))
  .add('Testing', () => (
    <TestingIcon />
  ))
  .add('Borehole', () => (
    <BoreholeIcon />
  ))
  .add('Innovation', () => (
    <BulbInnovationIcon />
  ));