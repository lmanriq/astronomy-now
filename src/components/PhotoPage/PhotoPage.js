import React, { Component } from 'react';
import './PhotoPage.css'
import { POTD_URL } from '../../utils/constants';
import { connect } from 'react-redux';
import { loadPhotoOfTheDay } from '../../actions';

class PhotoPage extends Component {
  async componentDidMount() {
    const potdResponse = await fetch(POTD_URL);
    const potdData = await potdResponse.json();
    this.props.loadPhotoOfTheDay(potdData);
  }

  render() {
    const { photoOfTheDay } = this.props;
    const { title, url, hdurl, explanation, date, copyright } = photoOfTheDay
    return(
      <section className="photo-page flex-container">
        <article className="image-container flex-container">
          <img src={url} alt={title} />
          <a href={hdurl} target="_blank" rel="noopener noreferrer" download>Click to download HD Image</a>
        </article>
        <article className="details-container">
          <h2>{title}</h2>
          <h3>{date}</h3>
          <p>{explanation}</p>
          <p>© {copyright}</p>
        </article>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  photoOfTheDay: state.photoOfTheDay
})

const mapDispatchToProps = dispatch => ({
  loadPhotoOfTheDay: photo => dispatch(loadPhotoOfTheDay(photo))
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotoPage)
