import React, { Component } from 'react';
import { connect } from 'react-redux';

class FavoritesPage extends Component {
  render() {
    const newsCards = []
    return(
      <section className="news-page main-page flex-container">
        <h1>News from the Hubble Space Telescope</h1>
        <div className="news-container">
          {newsCards}
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites
});

export default connect(mapStateToProps, null)(FavoritesPage);