import React, { Component } from "react";
import "./PhotoPage.css";
import { connect } from "react-redux";
import { loadPhotoOfTheDay, loadRoverPhotos } from "../../actions";
import PropTypes from 'prop-types';
import { fetchPOTD, fetchRoverPhotos } from "../../utils/apiCalls";

const moment = require('moment');
moment().format();

class PhotoPage extends Component {
  async componentDidMount() {
    try {
      const potdData = await fetchPOTD();
      const today = moment().format("YYYY-MM-DD");
      const yesterday = moment(today).subtract(1, 'days').format("YYYY-MM-DD");
      const roverDataToday = await fetchRoverPhotos(today);
      const roverDataYesterday = await fetchRoverPhotos(yesterday);
      this.props.loadRoverPhotos([...roverDataYesterday.photos, ...roverDataToday.photos])
      this.props.loadPhotoOfTheDay(potdData);      
    }
    catch(error) {
      console.error(error.message)
    }
  }

  render() {
    const { photoOfTheDay } = this.props;
    const { title, url, hdurl, explanation, date, copyright } = photoOfTheDay;
    return (
      <section className="photo-page main-page flex-container">
        <h1>{moment(date).format('ll')}</h1>
        <h1>NASA's Astronomy Photo of The Day</h1>
        <section>
          <article className="image-container flex-container">
            <img src={url} alt={title} />
            <a href={hdurl} target="_blank" rel="noopener noreferrer" download>
              Click to download HD Image
            </a>
          </article>
          <article className="details-container">
            <h2>{title}</h2>
            <p>{explanation}</p>
            <p>© {copyright}</p>
          </article>
        </section>
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
}
