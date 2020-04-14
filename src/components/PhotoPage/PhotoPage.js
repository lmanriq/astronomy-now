import React, { Component } from 'react';

class PhotoPage extends Component {

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