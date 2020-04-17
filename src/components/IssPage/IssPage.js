import React, { Component } from "react";
import "./IssPage.css";
import { updateISSPosition, loadPeople } from "../../actions";
import { connect } from "react-redux";
import IssMap from "../IssMap/IssMap";
import IssForm from "../IssForm/IssForm";
import { fetchPosition, fetchPeopleData } from "../../utils/apiCalls";
import PropTypes from 'prop-types';


class IssPage extends Component {
  async componentDidMount() {
    const peopleData = await fetchPeopleData();
    this.props.loadPeople(peopleData);
    const updatePosition = async () => {
      const nowData = await fetchPosition();
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
          <h1>International Space Station Tracking</h1>
          <p>
            The ISS is currently over{" "}
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

IssPage.propTypes = {
  issPosition: PropTypes.object,
  peopleData: PropTypes.object,
  updateISSPosition: PropTypes.func,
  loadPeople: PropTypes.func,
}