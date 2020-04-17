import React, { Component } from "react";
import { connect } from "react-redux";
import "leaflet/dist/leaflet.css";
import "./IssMap.css";
import { Map, Marker, TileLayer } from "react-leaflet";
import L from 'leaflet';
import PropTypes from 'prop-types';

class IssMap extends Component {
  render() {
    const { issPosition } = this.props;
    let { longitude, latitude } = issPosition;
    longitude = parseInt(longitude);
    latitude = parseInt(latitude);
    const issIcon = new L.Icon({
      iconUrl: '/images/iss-black.svg',
      iconSize: [60, 60]
    })
    if (longitude && latitude) {
      return (
        <Map
          center={[latitude, longitude]}
          zoom={4}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[latitude, longitude]} icon={issIcon} />
        </Map>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  issPosition: state.issPosition
});

export default connect(mapStateToProps)(IssMap);

