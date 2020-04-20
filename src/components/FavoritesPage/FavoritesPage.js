import React from "react";
import { connect } from "react-redux";
import NewsCard from "../NewsCard/NewsCard";
import PhotoCard from "../PhotoCard/PhotoCard";
import PropTypes from "prop-types";

const FavoritesPage = props => {
  const { favorites, news, roverPhotos } = props;
  const favoriteStories = news.filter(story =>
    favorites.includes(story.news_id)
  );
  const favoritePhotos = roverPhotos.filter(photo => favorites.includes(photo.id));
  const newsCards = favoriteStories.map(story => {
    return (
      <NewsCard
        key={story.news_id}
        id={story.news_id}
        title={story.name}
        date={story.publication}
        url={story.url}
        image={story.thumbnail}
        description={story.abstract}
      />
    );
  });
  const photoCards = favoritePhotos.map((photo, index) => (
    <PhotoCard
      image={photo.img_src}
      key={index}
      testid={photo.id}
      id={photo.id}
    />
  ));

  return (
    <section className="news-page main-page flex-container">
      <h1>Your Favorites</h1>
      {!favorites.length && (
        <h2>You have no favorited articles or photos yet!</h2>
      )}
      {newsCards.length > 0 && <h3>Your favorite articles</h3>}
      <div className="news-container">
        {!!favorites.length && newsCards}
      </div>
      {photoCards.length > 0 && <h3>Your favorite photos</h3>}
      <div className="rover-photos-container">
        {!!favorites.length && photoCards}
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  favorites: state.favorites,
  news: state.news,
  roverPhotos: state.roverPhotos
});

export default connect(mapStateToProps, null)(FavoritesPage);

FavoritesPage.propTypes = {
  favorites: PropTypes.array,
  news: PropTypes.array
};
