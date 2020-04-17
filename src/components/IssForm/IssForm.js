import React, { Component } from "react";
import {
  ISS_BASE,
  ISS_PASSTIMES_ENDPOINT,
  PROXY_URL
} from "../../utils/constants";
import './IssForm.css'
import { connect } from "react-redux";
import { loadSearchResults, showError, removeError } from "../../actions";

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
    const {loadSearchResults, showError, removeError } = this.props;
    console.log(lat, lon);
    if (lat < 80 && lat > -80 && lon < 180 && lon > -180) {
      try {
        const passResponse = await fetch(
          PROXY_URL + ISS_BASE + ISS_PASSTIMES_ENDPOINT(lat, lon)
        );
        const passData = await passResponse.json();
        removeError();
        loadSearchResults(passData.response);
      }
      catch (error) {
        showError(error.message)
      }
    } else {
      showError('Values must be within range')
    }
  }

  render() {
    const { lat, lon } = this.state;
    const { searchResults, error } = this.props;
    const disabled = !lat || !lon;
    const resultsList = searchResults.map((result, index) => (
      <li key={index}>
        {moment(new Date(result.risetime * 1000)).format("LLL")}
      </li>
    ));
    return (
      <section className="form-section">
        <h2>When will the ISS pass over me?</h2>
        <form className="flex-container">
          <div className="inputs-wrapper flex-container">
            <div className="input-container flex-container">
              <label htmlFor="lat">latitude (-80 to 80):</label>
              <input
                onChange={e => this.handleChange(e)}
                id="lat"
                type="number"
                min="-80"
                max="80"
                value={lat}
              />
            </div>
            <div className="input-container flex-container">
              <label htmlFor="lon">longitude (-180 to 180):</label>
              <input
                onChange={e => this.handleChange(e)}
                id="lon"
                type="number"
                min="-180"
                max="180"
                value={lon}
              />
            </div>
          </div>
          <button
            onClick={this.searchPassover.bind(this)}
            type="button"
            disabled={disabled}
          >
            search
          </button>
        </form>
        <section className="search-results">
          {error && <h4>{error}</h4>}
          <ul>{!error && resultsList}</ul>
        </section>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  searchResults: state.searchResults,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  loadSearchResults: results => dispatch(loadSearchResults(results)),
  showError: error => dispatch(showError(error)),
  removeError: () => dispatch(removeError())
});

export default connect(mapStateToProps, mapDispatchToProps)(IssForm);
