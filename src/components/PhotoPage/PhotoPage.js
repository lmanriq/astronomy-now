import React, { Component } from "react";
import "./PhotoPage.css";
import { connect } from "react-redux";
import { loadPhotoOfTheDay } from "../../actions";
import PropTypes from 'prop-types';
import { fetchPOTD } from "../../utils/apiCalls";

const moment = require('moment');
moment().format();

class PhotoPage extends Component {
  async componentDidMount() {
    try {
      const potdData = await fetchPOTD();
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
  photoOfTheDay: state.photoOfTheDay
});

const mapDispatchToProps = dispatch => ({
  loadPhotoOfTheDay: photo => dispatch(loadPhotoOfTheDay(photo))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoPage);

PhotoPage.propTypes = {
  photoOfTheDay: PropTypes.object,
  loadPhotoOfTheDay: PropTypes.func
}
