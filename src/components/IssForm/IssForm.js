import React, { Component } from "react";

class IssForm extends Component {
  constructor() {
    super();
    this.state = {
      lat: "",
      lon: ""
    };
  }

  render() {
    return (
      <form>
        <h2>When will the ISS pass over me?</h2>
        <label for="latitude">latitude:</label>
        <input id="latitde" type="number" min="-80" max="80" />
        <label for="longitude">latitude:</label>
        <input id="longitude" type="number" min="-180" max="180" />
      </form>
    );
  }
}

export default IssForm;
