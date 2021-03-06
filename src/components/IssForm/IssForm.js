import React, { Component } from "react";
import "./IssForm.css";
import { connect } from "react-redux";
import {
  loadSearchResults,
  showError,
  removeError,
  updateLoading
} from "../../actions";
import PropTypes from "prop-types";
import { fetchPasstimes } from "../../utils/apiCalls";

const moment = require("moment-timezone");
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
    const {
      loadSearchResults,
      showError,
      removeError,
      updateLoading
    } = this.props;
    if (lat < 80 && lat > -80 && lon < 180 && lon > -180) {
      try {
        updateLoading(true);
        const passData = await fetchPasstimes(lat, lon);
        loadSearchResults(passData);
        this.setState({ lat: "", lon: "" });
        updateLoading(false);
        removeError();
      } catch (error) {
        updateLoading(false);
        showError(error.message);
        setTimeout(() => {
          removeError();
        }, 3000);
      }
    } else {
      showError("Values must be within range");
      setTimeout(() => {
        removeError();
      }, 3000);
    }
  }

  render() {
    const { lat, lon } = this.state;
    const { searchResults, error } = this.props;
    const disabled = !lat || !lon;
    const resultsList = searchResults.response
      ? searchResults.response.map((result, index) => (
          <li key={index}>
            {moment(new Date(result.risetime * 1000)).tz('America/Denver').format("LLL")}
          </li>
        ))
      : "";
    return (
      <section className="form-section">
        <h2>When will the ISS pass over me?</h2>
        <form className="flex-container">
          <div className="inputs-wrapper flex-container">
            <div className="input-container flex-container">
              <label htmlFor="lat">latitude (-80 to 80):</label>
              <input
                onChange={e => this.handleChange(e)}
                data-testid="lat-input"
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
                data-testid="lon-input"
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
          {searchResults.request && (
            <h4>
              The ISS will be over {searchResults.request.latitude}{" "}
              {searchResults.request.latitude > 0 ? "N" : "S"},{" "}
              {searchResults.request.longitude}{" "}
              {searchResults.request.longitude > 0 ? "E" : "W"} at the following
              times (MST):
            </h4>
          )}
          <ul>{!error && resultsList}</ul>
        </section>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  searchResults: state.searchResults,
  error: state.error,
  isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
  loadSearchResults: results => dispatch(loadSearchResults(results)),
  showError: error => dispatch(showError(error)),
  removeError: () => dispatch(removeError()),
  updateLoading: loading => dispatch(updateLoading(loading))
});

export default connect(mapStateToProps, mapDispatchToProps)(IssForm);

IssForm.propTypes = {
  searchResults: PropTypes.object,
  error: PropTypes.string,
  loadSearchResults: PropTypes.func,
  showError: PropTypes.func,
  removeError: PropTypes.func,
  isLoading: PropTypes.bool,
  updateLoading: PropTypes.func
};
