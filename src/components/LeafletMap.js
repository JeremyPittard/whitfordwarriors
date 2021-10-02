import React from "react";
import PropTypes from "prop-types";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

const LeafletMap = () => {
  const propTypes = {
    /** Latitude and Longitude of the map centre in an array, eg [51, -1] **/
    position: PropTypes.array,

    /** Initial zoom level for the map (default 13) **/
    zoom: PropTypes.number,

    /** If set, will display a marker, which when clicked will display this text **/
    markerText: PropTypes.string,
  };

  const defaultProps = {
    position: [-31.804494, 115.756956],
    zoom: 13,
    markerText: "",
  };

  if (typeof window !== "undefined") {
    return (
      <Map center={this.props.position} zoom={this.props.zoom}>
        <TileLayer
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {this.props.markerText !== "" && (
          <Marker position={this.props.position}>
            <Popup>{this.props.markerText}</Popup>
          </Marker>
        )}
      </Map>
    );
  }
};

export default LeafletMap;
