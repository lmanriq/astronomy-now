import React, { Component } from "react";
import { connect } from "react-redux";
import "./IssMap.css";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

class IssMap extends Component {
  render() {
    const { issPosition } = this.props;
    let { longitude, latitude } = issPosition;
    longitude = parseInt(longitude);
    latitude = parseInt(latitude);
    if (longitude && latitude) {
      return (
        <Map className="map-container" center={[longitude, latitude]} zoom={12}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[longitude, latitude]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
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
