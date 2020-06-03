import React, { Component } from 'react';
import { Map, LayersControl, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
require('leaflet.polyline.snakeanim/L.Polyline.SnakeAnim');
import L from 'leaflet';
const { BaseLayer, Overlay } = LayersControl;

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

class Antpath extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineToanimate: L.polyline(
        [
          [27, 88],
          [28, 87],
          [29, 87],
        ],
        { snakingSpeed: this.props.speed, color: this.props.pathColor }
      ),
      bounds: [
        [25.898761936567023, 80.00244140625001],
        [30.732392734006083, 88.79150390625],
      ],
    };
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    this.state.lineToanimate.addTo(this.mapRef.current.leafletElement);
    this.state.lineToanimate.snakeIn();
  }

  componentDidUpdate(prevProps, prevState) {
    this.mapRef.current.leafletElement.removeLayer(this.state.lineToanimate);
    !this.props.withMarker
      ? (this.state.lineToanimate = L.polyline(
          [
            [27, 88],
            [28, 87],
            [29, 87],
          ],
          { snakingSpeed: this.props.speed, color: this.props.pathColor }
        ))
      : (this.state.lineToanimate = L.layerGroup(
          [
            L.circleMarker([27, 88]).bindTooltip('Airport', {
              permanent: true,
            }),
            L.polyline(
              [
                [27, 88],
                [28, 87],
              ],
              { snakingSpeed: this.props.speed, color: this.props.pathColor }
            ),
            L.circleMarker([28, 87]).bindTooltip('Hotel', { permanent: true }),
            L.polyline(
              [
                [28, 87],
                [29, 87],
              ],
              { snakingSpeed: this.props.speed, color: this.props.pathColor }
            ),
            L.circleMarker([29, 87]).bindTooltip('Conference Hall', {
              permanent: true,
            }),
          ],
          { snakingPause: this.props.speed }
        ));
    this.state.lineToanimate.addTo(this.mapRef.current.leafletElement);
    this.state.lineToanimate.snakeIn();
  }

  render() {
    const position = [27.7, 85.4];
    var vectorGridInputUrl =
      'https://geoserver.naxa.com.np/geoserver/gwc/service/tms/1.0.0/Bipad:Province@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf';
    console.log(this.props.choroplethData, 'choro');
    var key = null;
    this.props.choroplethData != null &&
      this.props.choroplethData.map((data) => {
        key = key + data.count;
      });
    var currentComponent = this;
    this.props.style != null &&
      Object.keys(this.props.style).map(function (key1, index) {
        key = key + currentComponent.props.style[key1];
      });

    return (
      <>
        <Map
          animate={true}
          zoom={8}
          maxZoom={18}
          attributionControl
          zoomControl
          bounds={this.state.bounds}
          ref={this.mapRef}
          center={position}
          style={{ height: 370, width: 800 }}
          zoomSnap={0.5}
        >
          <LayersControl position='topright'>
            <BaseLayer name='OpenStreetMap'>
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                noWrap={true}
              />
            </BaseLayer>
            <BaseLayer name='Google Streets' checked={true}>
              <TileLayer
                attribution='&amp;copy <a href="http://maps.google.com">Google Maps</a> contributors'
                url='http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
                maxZoom={20}
                subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
              />
            </BaseLayer>
            <BaseLayer name='Google Hybrid'>
              <TileLayer
                attribution='&amp;copy <a href="http://maps.google.com">Google Maps</a> contributors'
                url='http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}'
                maxZoom={20}
                subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
              />
            </BaseLayer>
            <BaseLayer name='Google Satellite'>
              <TileLayer
                attribution='&amp;copy <a href="http://maps.google.com">Google Maps</a> contributors'
                url='http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
                maxZoom={20}
                subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
              />
            </BaseLayer>
            <BaseLayer name='Google Terrain'>
              <TileLayer
                attribution='&amp;copy <a href="http://maps.google.com">Google Maps</a> contributors'
                url='http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
                maxZoom={20}
                subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
              />
            </BaseLayer>

            <BaseLayer name='Mapbox Streets'>
              <TileLayer
                attribution='&amp;copy '
                url='https://api.mapbox.com/styles/v1/upendraoli/cjuvfcfns1q8r1focd0rdlgqn/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidXBlbmRyYW9saSIsImEiOiJjaWYwcnFnNmYwMGY4dGZseWNwOTVtdW1tIn0.uhY72SyqmMJNTKa0bY-Oyw'
                maxZoom={20}
              />
            </BaseLayer>
          </LayersControl>
        </Map>
      </>
    );
  }
}
export default Antpath;
