import React, { Component } from "react";
import "./IssPage.css";

class IssPage extends Component {
  render() {
    return (
      <section className="iss-page main-page">
        <div className="iss-map-container">

        </div>
        <div className="iss-form-container">
          <p>The International Space Station is currently over lattitude, longitude</p>
          <p>There are currently 6 humans in space</p>
        </div>
      </section>
    );
  }
}

export default IssPage;
