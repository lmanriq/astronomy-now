import React, { Component } from 'react';
import { POTD_URL } from '../../utils/constants'

class PhotoPage extends Component {
  async componentDidMount() {
    const response = await fetch(POTD_URL);
    const data = await response.json();
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

export default PhotoPage;