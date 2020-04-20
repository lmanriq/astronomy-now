import React, { Component } from "react";
import "./IssPage.css";
import { updateISSPosition, loadPeople, updateLoading } from "../../actions";
import { connect } from "react-redux";
import IssMap from "../IssMap/IssMap";
import IssForm from "../IssForm/IssForm";
import { fetchPosition, fetchPeopleData } from "../../utils/apiCalls";
import PropTypes from "prop-types";
import LoadingPage from "../LoadingPage/LoadingPage";

class IssPage extends Component {
  async componentDidMount() {
    try {
      this.props.updateLoading(true);
      const peopleData = await fetchPeopleData();
      this.props.loadPeople(peopleData);
      const updatePosition = async () => {
        const nowData = await fetchPosition();
        this.props.updateISSPosition(nowData.iss_position);
        setTimeout(updatePosition, 5000);
      };
      updatePosition();
      this.props.updateLoading(false);
    } catch (error) {
      this.props.updateLoading(false);
      console.error(error.message);
    }
  }

  render() {
    const { issPosition, peopleData, isLoading } = this.props;
    const { latitude, longitude } = issPosition;
    const peopleList = peopleData.people
      ? peopleData.people.map((person, index) => (
          <li key={index}>
            {person.name}, {person.craft}
          </li>
        ))
      : "loading...";
    if(isLoading) {
      return <LoadingPage />
    } else {
      return (
        <section className="iss-page main-page flex-container">
          <div className="iss-map-container flex-container">
            <IssMap />
          </div>
          <div className="iss-form-container flex-container">
            <h1>International Space Station Tracking</h1>
            <p>
              The ISS is currently over {latitude} {latitude > 0 ? "N" : "S"},{" "}
              {longitude} {longitude > 0 ? "E" : "W"}
            </p>
            <p>There are currently {peopleData.number} humans in space</p>
            <ul>{peopleList}</ul>
            <IssForm />
          </div>
        </section>
      );
    }
  }
}

const mapStateToProps = state => ({
  issPosition: state.issPosition,
  peopleData: state.peopleData,
  isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
  updateISSPosition: position => dispatch(updateISSPosition(position)),
  loadPeople: peopleData => dispatch(loadPeople(peopleData)),
  updateLoading: loading => dispatch(updateLoading(loading))
});

export default connect(mapStateToProps, mapDispatchToProps)(IssPage);

IssPage.propTypes = {
  issPosition: PropTypes.object,
  peopleData: PropTypes.object,
  updateISSPosition: PropTypes.func,
  loadPeople: PropTypes.func
};
