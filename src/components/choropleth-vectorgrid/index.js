import React, { Component } from "react";
import {
  Map,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import VectorGrid from "./vectorgrid";

let map = {};
class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      provinceBbox: [],
      bounds: [[25.898761936567023, 80.00244140625001], [30.732392734006083, 88.79150390625]],
    };
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    console.log("consoled")

  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    const position = [27.7, 85.4];
    var vectorGridInputUrl = "https://geoserver.naxa.com.np/geoserver/gwc/service/tms/1.0.0/Bipad:Province@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf";
    console.log(this.props.choroplethData, "choro")
    var key = null;
    this.props.choroplethData != null && this.props.choroplethData.map((data) => {
      key = key + data.count;
    });
    var currentComponent = this;
    this.props.style != null && Object.keys(this.props.style).map(function (key1, index) {
      key = key + currentComponent.props.style[key1];
    });
    this.props.colorArray != null && this.props.colorArray.map((color) => {
      key = key+color;
    })
    this.props.divisions != null && this.props.divisions.map((division) => {
      key = key+division;
    })

    return (
      <>
        <Map
          doubleClickZoom={this.props.zoomControl}
          animate={true}
          zoom={8}
          maxZoom={18}
          attributionControl
          zoomControl
          bounds={this.state.bounds}
          ref={this.mapRef}
          center={position}
          style={{ height: 370, width: 800 }}
          onClick={this.onClick}
          zoomSnap={0.5}
        >
          <VectorGrid
            key={key}
            mapRef={this.mapRef}
            style={this.props.style != null ? this.props.style : {
              fillColor: "#a3b7e3",
              fillOpacity: 0,
              weight: 1.5,
              opacity: 1,
              color: "#a3b7e3",
              fill: true
            }
            } //Province style setting
            //   provinceCounts={[20, 12, 30, 4, 5, 26, 17]} //province counts for circles at center of province
            choroplethData={this.props.choroplethData != null ? this.props.choroplethData : [{ id: 1, count: 10 }, { id: 2, count: 2 }, { id: 3, count: 3 }, { id: 4, count: 4 }, { id: 5, count: 5 }, { id: 6, count: 6 }, { id: 7, count: 7 }]}  //
            //color="#0000FF" //single color gradient - to make this active dont pass colorArray
            // legendDivisions = {10} //no of divisions in legend
            colorArray={this.props.colorArray} //multi color custom gradient
            divisions = {this.props.divisions}
            //label = {true}
            legend={true}
            // choroplethTitle = {"Covid Cases"}
            vectorGridUrl={vectorGridInputUrl} //vectortile url setting
          />

        </Map>
      </>
    );
  }
}
export default MapComponent;