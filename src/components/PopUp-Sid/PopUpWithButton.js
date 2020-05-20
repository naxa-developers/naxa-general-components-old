import React, { Component } from "react";
import {
    Map, TileLayer, Marker, Popup
} from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

import {
    popupContent, popupHead, popupText, okText
} from './css/popupStyles';


class PopUpButton extends Component {
    constructor(props) {
        super(props);
        this.state = {

            bounds: [[25.898761936567023, 80.00244140625001], [30.732392734006083, 88.79150390625]],
        };
        this.mapRef = React.createRef();
    }

    render() {
        const center = [27.7, 85.4];
        const defaultMarker = new L.icon({
            iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
            iconSize: [25, 41],
            iconAnchor: [13, 0]
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
                    center={center}
                    style={{ height: 370, width: 800 }}
                    onClick={this.onClick}
                    zoomSnap={0.5}
                >
                    <Marker position={center} icon={defaultMarker}>
                        <Popup className="request-popup">
                            <p>Just a Popup!</p>
                        </Popup>
                    </Marker>


                </Map>
            </>
        );
    }
}
export default PopUpButton;