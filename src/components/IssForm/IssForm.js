import React, { Component } from "react";
import {
  ISS_BASE,
  ISS_PASSTIMES_ENDPOINT,
  PROXY_URL
} from "../../utils/constants";
import { connect } from "react-redux";
import { loadSearchResults } from "../../actions";

const moment = require("moment");
moment().format();

class IssForm extends Component {
  constructor() {
    super();
    this.state = {
      lat: "",
      lon: ""
    };
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  async searchPassover() {
    const { lat, lon } = this.state;
    console.log(lat, lon);
    if (lat < 80 && lat > -80 && lon < 180 && lon > -180) {
      const passResponse = await fetch(
        PROXY_URL + ISS_BASE + ISS_PASSTIMES_ENDPOINT(lat, lon)
      );
      const passData = await passResponse.json();
      this.props.loadSearchResults(passData.response);
    }
  }

  render() {
    const { lat, lon } = this.state;
    const { searchResults } = this.props;
    const disabled = !lat || !lon;
    const resultsList = searchResults.map((result, index) => <li key={index}>{result.risetime}</li>)
    return (
      <section className="form-section">
        <form>
          <h2>When will the ISS pass over me?</h2>
          <label htmlFor="lat">latitude (-80 to 80):</label>
          <input
            onChange={e => this.handleChange(e)}
            id="lat"
            type="number"
            min="-80"
            max="80"
            value={lat}
          />
          <label htmlFor="lon">longitude (-180 to 180):</label>
          <input
            onChange={e => this.handleChange(e)}
            id="lon"
            type="number"
            min="-180"
            max="180"
            value={lon}
          />
          <button
            onClick={this.searchPassover.bind(this)}
            type="button"
            disabled={disabled}
          >
            search
          </button>
        </form>
        <section className="search-results">
          <ul>
            {resultsList}
          </ul>
        </section>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  searchResults: state.searchResults
})

const mapDispatchToProps = dispatch => ({
  loadSearchResults: results => dispatch(loadSearchResults(results))
});

export default connect(mapStateToProps, mapDispatchToProps)(IssForm);
