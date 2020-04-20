import React, { Component } from "react";
import "./PhotoPage.css";
import { connect } from "react-redux";
import { loadPhotoOfTheDay, loadRoverPhotos } from "../../actions";
import PropTypes from "prop-types";
import { fetchPOTD, fetchRoverPhotos } from "../../utils/apiCalls";
import PhotoCard from "../PhotoCard/PhotoCard";

const moment = require("moment");
moment().format();

class PhotoPage extends Component {
  async componentDidMount() {
    try {
      const potdData = await fetchPOTD();
      const today = moment().format("YYYY-MM-DD");
      const yesterday = moment(today)
        .subtract(1, "days")
        .format("YYYY-MM-DD");
      const roverDataToday = await fetchRoverPhotos(today);
      const roverDataYesterday = await fetchRoverPhotos(yesterday);
      this.props.loadRoverPhotos([
        ...roverDataToday.photos,
        ...roverDataYesterday.photos
      ]);
      this.props.loadPhotoOfTheDay(potdData);
    } catch (error) {
      console.error(error.message);
    }
  }

  render() {
    const { photoOfTheDay, roverPhotos } = this.props;
    const { title, url, hdurl, explanation, date, copyright } = photoOfTheDay;
    const photoImages = roverPhotos.map((photo, index) => (
      <PhotoCard image={photo.img_src} key={index} testid={photo.id} />
    ));
    console.log(date);
    return (
      <section className="photo-page main-page flex-container">
        <h1>{date && moment(date).format("ll")}</h1>
        <h1>NASA's Astronomy Photo of The Day</h1>
        <section>
          <article className="image-container flex-container">
            <img src={url} alt={title} />
            <a href={hdurl} target="_blank" rel="noopener noreferrer" download>
              Click to download HD Image
            </a>
          </article>
          <article className="details-container">
            <h1>{title}</h1>
            <p className="photo-explanation">{explanation}</p>
            <p>© {copyright}</p>
          </article>
        </section>
        <h1>Mars Curiosity Rover Photos (Today and Yesterday)</h1>
        <p>click to expand</p>
        {!roverPhotos.length && (
          <h2>
            No recent rover photos! Check back soon to see more of Curiosity's
            wanderings.
          </h2>
        )}
        <section className="rover-photos-container">{photoImages}</section>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  photoOfTheDay: state.photoOfTheDay,
  roverPhotos: state.roverPhotos
});

const mapDispatchToProps = dispatch => ({
  loadPhotoOfTheDay: photo => dispatch(loadPhotoOfTheDay(photo)),
  loadRoverPhotos: photos => dispatch(loadRoverPhotos(photos))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoPage);

PhotoPage.propTypes = {
  photoOfTheDay: PropTypes.object,
  loadPhotoOfTheDay: PropTypes.func
};
