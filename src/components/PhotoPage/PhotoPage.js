import React, { Component } from 'react';
import { POTD_URL } from '../../utils/constants';
import { connect } from 'react-redux';
import { loadPhotoOfTheDay } from '../../actions';

class PhotoPage extends Component {
  async componentDidMount() {
    const response = await fetch(POTD_URL);
    const data = await response.json();
    this.props.loadPhotoOfTheDay(data);
  }

  render() {
    const { photoOfTheDay } = this.props;
    const { title, url, explanation, date, copyright } = photoOfTheDay
    return(
      <section>
        <article className="image-container">
          <img src={url} alt={title} />
        </article>
        <article className="details-container">
          <h2>{title}</h2>
          <h3>{date}</h3>
          <p>{explanation}</p>
          <p>Copyright: {copyright}</p>
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
