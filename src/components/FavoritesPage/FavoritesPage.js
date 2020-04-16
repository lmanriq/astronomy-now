import React, { Component } from 'react';
import { connect } from 'react-redux';

class FavoritesPage extends Component {
  render() {
    const { favorites } = this.props;
    const newsCards = []
    return(
      <section className="news-page main-page flex-container">
        <h1>Your Favorite Articles</h1>
        {!favorites.length && <h2>You have no favorited articles yet!</h2>}
        <div className="news-container">
          {!!favorites.length && newsCards}
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites
});

export default connect(mapStateToProps, null)(FavoritesPage);