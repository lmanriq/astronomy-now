import React, { Component } from "react";
import "./IssPage.css";
import { updateISSPosition, loadPeople } from "../../actions";
import { connect } from "react-redux";
import IssMap from "../IssMap/IssMap";
import IssForm from "../IssForm/IssForm";
import {
  ISS_BASE,
  ISS_NOW_ENDPOINT,
  ISS_PEOPLE_ENDPOINT
} from "../../utils/constants";

class IssPage extends Component {
  async componentDidMount() {
    const peopleResponse = await fetch(ISS_BASE + ISS_PEOPLE_ENDPOINT);
    const peopleData = await peopleResponse.json();
    this.props.loadPeople(peopleData);
    const updatePosition = async () => {
      const nowResponse = await fetch(ISS_BASE + ISS_NOW_ENDPOINT);
      const nowData = await nowResponse.json();
      this.props.updateISSPosition(nowData.iss_position);
      setTimeout(updatePosition, 5000);
    };
    updatePosition();
  }

  render() {
    const { issPosition, peopleData } = this.props;
    const { latitude, longitude } = issPosition;
    const peopleList = peopleData.people
      ? peopleData.people.map((person, index) => (
          <li key={index}>
            {person.name}, {person.craft}
          </li>
        ))
      : "loading...";
    return (
      <section className="iss-page main-page flex-container">
        <div className="iss-map-container flex-container">
          <IssMap />
        </div>
        <div className="iss-form-container flex-container">
          <p>
            The International Space Station is currently over{" "}
            {latitude} {latitude > 0 ? 'N' : 'S'}, {longitude} {longitude > 0 ? 'E' : 'W'}
          </p>
          <p>There are currently {peopleData.number} humans in space</p>
          <ul>{peopleList}</ul>
          <IssForm />
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  issPosition: state.issPosition,
  peopleData: state.peopleData
});

const mapDispatchToProps = dispatch => ({
  updateISSPosition: position => dispatch(updateISSPosition(position)),
  loadPeople: peopleData => dispatch(loadPeople(peopleData))
});

export default connect(mapStateToProps, mapDispatchToProps)(IssPage);
