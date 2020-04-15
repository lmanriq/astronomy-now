import React, { Component } from 'react';
import { POTD_URL } from '../../utils/constants';
import { connect } from 'react-redux';
import { loadPhotoOfTheDay } from '../../actions';

class PhotoPage extends Component {
  async componentDidMount() {
    const response = await fetch(POTD_URL);
    const data = await response.json();
    this.props.loadPhotoOfTheDay(data);
    console.log(data)
  }

  render() {
    return(
      <section>
        <article className="image-container">
          <img src="" alt="" />
        </article>
        <article className="details-container">
          <h2>Title</h2>
          <h3>Date</h3>
          <p>Description</p>
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
