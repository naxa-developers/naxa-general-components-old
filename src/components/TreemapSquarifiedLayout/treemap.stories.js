import React from 'react';
import TreeMapSquare from './index.js';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object, text, boolean, number, color, } from '@storybook/addon-knobs';


var data = [
  {
     "title":"",
     "color":1,
     "children":[
        {
           "name":"test",
           "size":997.7441102951205,
           "color":0.13623468395953742,
           "style":{
              "border":"thin solid red"
           }
        },
        {
           "name":20,
           "size":754.0241612800445,
           "color":0.1963445924414975,
           "style":{
              "border":"thin solid red"
           }
        },
        {
           "name":"test1",
           "size":1134.52992644475304,
           "color":0.4859571961362035,
           "style":{
              "border":"thin solid red"
           }
        },
        {
           "name":20,
           "size":6.725594255547751,
           "color":0.47386074278934487,
           "style":{
              "border":"thin solid red"
           }
        },
        {
           "name":20,
           "size":361.7028167619096,
           "color":0.18396652247976886,
           "style":{
              "border":"thin solid red"
           }
        },
        {
           "name":20,
           "size":613.6163392023682,
           "color":0.7842584228072418,
           "style":{
              "border":"thin solid red"
           }
        },
        {
           "name":20,
           "size":337.7633111801965,
           "color":0.9448452514255861,
           "style":{
              "border":"thin solid red"
           }
        },
        {
           "name":20,
           "size":672.0244938612099,
           "color":0.37535515334414815,
           "style":{
              "border":"thin solid red"
           }
        },
        {
           "name":20,
           "size":290.08156357330563,
           "color":0.9504118976686582,
           "style":{
              "border":"thin solid red"
           }
        },
        {
           "name":20,
           "size":394.18302378460425,
           "color":0.880441720953905,
           "style":{
              "border":"thin solid red"
           }
        },
        {
           "name":20,
           "size":38.990920625115336,
           "color":0.6474835900061173,
           "style":{
              "border":"thin solid red"
           }
        },
        {
           "name":20,
           "size":570.2394807497158,
           "color":0.24679995099012908,
           "style":{
              "border":"thin solid red"
           }
        },
        {
           "name":20,
           "size":283.40111968612035,
           "color":0.5844247202591208,
           "style":{
              "border":"thin solid red"
           }
        },
        {
           "name":20,
           "size":293.5218318388275,
           "color":0.02372024611767687,
           "style":{
              "border":"thin solid red"
           }
        },
        {
           "name":20,
           "size":16.21917312228449,
           "color":0.37091474083753795,
           "style":{
              "border":"thin solid red"
           }
        },
        {
           "name":20,
           "size":108.56011560828316,
           "color":0.44095935945421716,
           "style":{
              "border":"thin solid red"
           }
        },
        {
           "name":20,
           "size":21.707347897118147,
           "color":0.1915595849970695,
           "style":{
              "border":"thin solid red"
           }
        },
        {
           "name":20,
           "size":108.60194977769488,
           "color":0.5699735559438093,
           "style":{
              "border":"thin solid red"
           }
        },
        {
           "name":20,
           "size":535.9724774346269,
           "color":0.5217166679567669,
           "style":{
              "border":"thin solid red"
           }
        },
        {
           "name":20,
           "size":158.42153327697184,
           "color":0.8628631168497172,
           "style":{
              "border":"thin solid red"
           }
        }
     ]
  }    
]
//var colors = ["#008ffb","#00e396","#feb019","#ff4560","#775dd0"]
var colors = ["rgba(55, 61, 63,1)","rgba(0, 227, 150,1)","rgba(254, 176, 25,1)","rgba(255, 69, 96,1)","rgba(119, 93, 208,1)"]
storiesOf('TreeMapSquare', module)
  .addDecorator(withKnobs)
  .add('Data', () => (
    <TreeMapSquare 
      data = {object('Data', data,'Data Knob')}
      //colors = {[color("Color1",colors[0]),color("Color2",colors[1]), color("Color3",colors[2]), color("Color4",colors[3])]}
      showCirclePack = {boolean('Show Circle Pack', false)}
      onChange={action('change')}
    />
    )
  )
  