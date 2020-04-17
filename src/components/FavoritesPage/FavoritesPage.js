import React from 'react';
import { connect } from 'react-redux';
import NewsCard from "../NewsCard/NewsCard";
import PropTypes from 'prop-types';

const FavoritesPage = (props) => {
  const { favorites, news } = props;
  const favoriteStories = news.filter(story => favorites.includes(story.news_id))
  const newsCards = favoriteStories.map(story => {
    console.log(story)
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

const mapStateToProps = state => ({
  favorites: state.favorites,
  news: state.news
});

export default connect(mapStateToProps, null)(FavoritesPage);