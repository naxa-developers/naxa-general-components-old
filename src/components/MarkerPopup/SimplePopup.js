import React, { Component } from "react";
import {
    Map, TileLayer, Marker, Popup
} from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import { color } from "@storybook/addon-knobs";
import {
    popButton, popupContentStyle, popupHead, popupText, okText
} from './css/popupStyles';

class MapComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

            bounds: [[25.898761936567023, 80.00244140625001], [30.732392734006083, 88.79150390625]],
        };
        this.mapRef = React.createRef();
    }


    render() {
        const { imageUrl, popupContent, enableButton, iconUrl, buttonContent } = this.props;
        const center = [27.7, 85.4];
        // const url = iconUrl == '' || iconUrl === undefined ? iconUrl : 'https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png'
        // console.log("url", url);

        const defaultMarker = new L.icon({
            iconUrl: 'https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png',
            iconSize: [27, 41],
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
                            <div
                                style={popupContentStyle}
                            >
                                <img
                                    src={imageUrl}
                                    width="50"
                                    height="50"
                                />
                                <div className="m-2"
                                    style={{ color: this.props.color }}
                                >
                                    {popupContent}
                                </div>
                                {
                                    enableButton && <button
                                        style={popButton}
                                    >{buttonContent}</button>
                                }
                            </div>
                        </Popup>
                    </Marker>


                </Map>
            </>
        );
    }
}
export default MapComponent;