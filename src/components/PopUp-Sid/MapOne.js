import React from 'react';
import { useState } from 'react';
import { Map, TileLayer, Marker, Popup, LayersControl } from "react-leaflet";
const { BaseLayer } = LayersControl;

import L from "leaflet";
// import { defaultMarker } from "./defaultMarker";
// import { popupContent, popupHead, popupText, okText } from "./popupStyles";
// import "./Map.css";

const center = [51.505, -0.09];
const defaultMarker = new L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [13, 0]
});



const MapOne = () => {
    const [selectedBaseLayer, setselectedBaseLayer] = useState("mapbox");
    return (
        <Map center={center} zoom={13}>
            <LayersControl position="topright">
                <BaseLayer checked name="OpenStreetMap.Mapnik">
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </BaseLayer>
                <BaseLayer name="OpenStreetMap.BlackAndWhite">
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
                    />
                </BaseLayer>
                <Overlay name="Marker with popup">
                    <Marker position={center}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
                    </Marker>
                </Overlay>
                <Overlay checked name="Layer group with circles">
                    <LayerGroup>
                        <Circle center={center} fillColor="blue" radius={200} />
                        <Circle
                            center={center}
                            fillColor="red"
                            radius={100}
                            stroke={false}
                        />
                        <LayerGroup>
                            <Circle
                                center={[51.51, -0.08]}
                                color="green"
                                fillColor="green"
                                radius={100}
                            />
                        </LayerGroup>
                    </LayerGroup>
                </Overlay>
                <Overlay name="Feature group">
                    <FeatureGroup color="purple">
                        <Popup>Popup in FeatureGroup</Popup>
                        <Circle center={[51.51, -0.06]} radius={200} />
                        <Rectangle bounds={rectangle} />
                    </FeatureGroup>
                </Overlay>
            </LayersControl>
        </Map>
    );
};

export default MapOne;
