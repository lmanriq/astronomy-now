import React, { Component } from "react";
import "./IssPage.css";
import {
  ISS_BASE,
  ISS_NOW_ENDPOINT,
  ISS_PEOPLE_ENDPOINT
} from "../../utils/constants";

class IssPage extends Component {
  async componentDidMount() {
    const nowResponse = await fetch(ISS_BASE + ISS_NOW_ENDPOINT);
    const nowData = await nowResponse.json();
    console.log(nowData.iss_position);

  }

  render() {
    return (
      <section className="iss-page main-page">
        <div className="iss-map-container"></div>
        <div className="iss-form-container">
          <p>
            The International Space Station is currently over lattitude,
            longitude
          </p>
          <p>There are currently 6 humans in space</p>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  issPosition: state.issPosition
})

const mapDispatchToProps = dispatch => ({
  updateISSPosition: position => dispatch(updateISSPosition(position))
})

export default IssPage;
