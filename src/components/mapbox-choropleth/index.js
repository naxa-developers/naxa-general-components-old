import React, { Component } from "react";
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/src/css/mapbox-gl.css'
import './mapbox-choropleth.scss';
import Choropleth from './mapbox-choropleth';

class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        map:null,
        choroplethData: [
        { 'code': '1', 'count': 13.17 },
        { 'code': '2', 'count': 9.5 },
        { 'code': '3', 'count': 12.15 },
        { 'code': '4', 'count': 8.99 },
        { 'code': '5', 'count': 11.83 },
        { 'code': '6', 'count': 7.52 },
        { 'code': '7', 'count': 6.44 }
        ],
        maxValue: 13,
    };
  }

  addMap = () => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ2VvbWF0dXBlbiIsImEiOiJja2E5bDFwb2swdHNyMnNvenZxa2Vpeml2In0.fCStqdwmFYFP-cUvb5vMCw';
    const map = new mapboxgl.Map({
    container: 'mapBoxMap',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [85.5,27.5], // starting position [lng, lat]
    zoom: 5 // starting zoom
    });
    this.setState({map:map});
  }
  componentDidMount() {
    this.addMap();
  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    return (
        <div id="mapBoxMap">
            {this.state.map && <Choropleth 
                map = {this.state.map}
                choroplethData = {this.state.choroplethData}
                // maxValue = {this.state.maxValue}
                divisions = {[0,5,10,15,20,25,30]}
                label = {true}
                color = "#0000FF"
                // colorArray = {["#fff3d4", "#FED976", "#FEB24C", "#FD8D3C", "#FC4E2A", "#E31A1C", "#BD0026", "#800026"]}
                vectorTileUrl = "https://vectortile.naxa.com.np/federal/province.mvt/?tile={z}/{x}/{y}"
            >
            </Choropleth>
            }
        </div>
    )
  }
}
export default MapComponent;