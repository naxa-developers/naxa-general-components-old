import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import * as ELG from 'esri-leaflet-geocoder';
import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css';
import './map.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  iconAnchor: [12, 35],
  popupAnchor: [0, -25],
  shadowUrl: 'my-icon-shadow.png',
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

export default class FormMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      center: {
        lat: 28.611857,
        lng: 84.177246,
      },

      zoom: 1,
    };
    this.mapRef = React.createRef();
    this.markerRef = React.createRef();
  }

  componentDidMount() {
    const { getUserLocation } = this.props;
    const map = this.mapRef && this.mapRef.current.leafletElement;
    if (getUserLocation === 'searchbox') {
      const searchControl = new ELG.Geosearch().addTo(map);
      const results = new L.LayerGroup().addTo(map);

      searchControl.on(
        'results',
        function (data) {
          results.clearLayers();
          for (let i = data.results.length - 1; i >= 0; i--) {
            // results.addLayer(L.marker(data.results[i].latlng));
            let latlng = data.results[i].latlng;
            console.log(latlng.lat);
            this.setState({ marker: latlng });
          }
        }.bind(this)
      );
    } else if (getUserLocation === 'geolocate') {
      map.locate({ setView: true });
      map.on('locationfound', this.handleOnLocationFound);
    }
  }

  handleOnLocationFound = (event) => {
    const map = this.mapRef && this.mapRef.current.leafletElement;

    const latlng = event.latlng;
    const radius = event.accuracy;

    const circle = L.circle(latlng, radius);
    circle.addTo(map);
    this.setState({
      marker: latlng,
    });
  };

  handleMarker = (event) => {
    this.setState({
      marker: event.latlng,
    });
  };
  updatePosition = () => {
    const marker = this.markerRef.current.leafletElement;

    marker.openPopup();
    if (marker != null) {
      this.setState({
        marker: marker.getLatLng(),
      });
    }
  };

  render() {
    const { marker, center, zoom } = this.state;
    const { getUserLocation } = this.props;

    const position = [center.lat, center.lng];
    const markerPosition = marker && [marker.lat, marker.lng];

    return (
      <>
        {getUserLocation === 'marker' && (
          <div>
            Click on the map to add marker and drag to adjust to your location
          </div>
        )}
        <Map
          id='mapid'
          ref={this.mapRef}
          center={position}
          zoom={zoom}
          onClick={getUserLocation === 'marker' && this.handleMarker}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          {marker && (
            <Marker
              icon={DefaultIcon}
              ref={this.markerRef}
              position={markerPosition}
              draggable={true}
              onDragend={this.updatePosition}
            >
              <Popup>You are here!</Popup>
            </Marker>
          )}
        </Map>
      </>
    );
  }
}
