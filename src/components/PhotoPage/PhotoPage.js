import React, { Component } from "react";
import "./PhotoPage.css";
import { connect } from "react-redux";
import {
  loadPhotoOfTheDay,
  loadRoverPhotos,
  updateLoading
} from "../../actions";
import PropTypes from "prop-types";
import { fetchPOTD, fetchRoverPhotos } from "../../utils/apiCalls";
import PhotoCard from "../PhotoCard/PhotoCard";
import LoadingPage from "../LoadingPage/LoadingPage";


const moment = require("moment");
moment().format();

class PhotoPage extends Component {
  async componentDidMount() {
    try {
      this.props.updateLoading(true);
      const potdData = await fetchPOTD();
      const today = moment().format("YYYY-MM-DD");
      const yesterday = moment(today)
        .subtract(1, "days")
        .format("YYYY-MM-DD");
      const dayBefore = moment(today)
        .subtract(2, "days")
        .format("YYYY-MM-DD");
      const dayBefore2 = moment(today)
        .subtract(3, "days")
        .format("YYYY-MM-DD");
      const roverDataToday = await fetchRoverPhotos(today);
      const roverDataYesterday = await fetchRoverPhotos(yesterday);
      const roverDataDayBefore = await fetchRoverPhotos(dayBefore);
      const roverDataDayBefore2 = await fetchRoverPhotos(dayBefore2);
      this.props.loadRoverPhotos([
        ...roverDataToday.photos,
        ...roverDataYesterday.photos,
        ...roverDataDayBefore.photos,
        ...roverDataDayBefore2.photos
      ]);
      this.props.loadPhotoOfTheDay(potdData);
      this.props.updateLoading(false);
    } catch (error) {
      console.error(error.message);
      this.props.updateLoading(false);
    }
  }

  render() {
    const { photoOfTheDay, roverPhotos, isLoading } = this.props;
    const { title, url, hdurl, explanation, date, copyright } = photoOfTheDay;
    const photoImages = roverPhotos.map((photo, index) => (
      <PhotoCard
        image={photo.img_src}
        key={index}
        testid={photo.id}
        id={photo.id}
      />
    ));

    if (isLoading) {
      return (
        <LoadingPage />
      );
    } else {
      return (
        <section className="photo-page main-page flex-container">
          <h1>{date && moment(date).format("ll")}</h1>
          <h1>NASA's Astronomy Photo of The Day</h1>
          <section>
            <article className="image-container flex-container">
              <img src={url} alt={title} />
              <a
                href={hdurl}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Click to download HD Image
              </a>
            </article>
            <article className="details-container">
              <h1>{title}</h1>
              <p className="photo-explanation">{explanation}</p>
              <p>© {copyright}</p>
            </article>
          </section>
          <h1>Most Recent Mars Curiosity Rover Photos</h1>
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
}

const mapStateToProps = state => ({
  photoOfTheDay: state.photoOfTheDay,
  roverPhotos: state.roverPhotos,
  isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
  loadPhotoOfTheDay: photo => dispatch(loadPhotoOfTheDay(photo)),
  loadRoverPhotos: photos => dispatch(loadRoverPhotos(photos)),
  updateLoading: loading => dispatch(updateLoading(loading))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoPage);

PhotoPage.propTypes = {
  photoOfTheDay: PropTypes.object,
  loadPhotoOfTheDay: PropTypes.func
};
