import React, { Component } from "react";

class IssForm extends Component {
  constructor() {
    super();
    this.state = {
      lat: "",
      lon: ""
    };
  }

  handleChange(e) {
    this.setState({[e.target.id]: e.target.value})
  }

  searchPassover() {
    
  }

  render() {
    return (
      <form>
        <h2>When will the ISS pass over me?</h2>
        <label htmlFor="lat">latitude:</label>
        <input onChange={(e) => this.handleChange(e)} id="lat" type="number" min="-80" max="80" value={this.state.lat}/>
        <label htmlFor="lon">latitude:</label>
        <input onChange={(e) => this.handleChange(e)} id="lon" type="number" min="-180" max="180" value={this.state.lon}/>
        <button type="button">search</button>
      </form>
    );
  }
}

export default IssForm;
