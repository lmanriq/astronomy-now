import React from "react";
import "./NewsCard.css";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../../actions";

const NewsCard = props => {
  const { id, title, url, image, description, date, favorites, addFavorite, removeFavorite } = props;

  const favBtn = (
    <button onClick={() => addFavorite(id)}>
      <img
        className="heart-icon"
        src="/images/empty-heart.svg"
        alt="heart icon"
      />
    </button>
  );
  const unFavBtn = (
    <button onClick={() => removeFavorite(id)}>
      <img
        className="heart-icon"
        src="/images/full-heart.svg"
        alt="heart icon"
      />
    </button>
  );

  const btn = favorites.includes(id) ? unFavBtn : favBtn;

  return (
    <section className="article-container flex-container">
      <article className="news-card">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <div className="card-image-container">
            <img src={image} alt={title} />
            <p>Click to Read More</p>
          </div>
        </a>
        <div className="card-text-container">
          <h1>{title}</h1>
          <p>{date}</p>
          <p>{description}</p>
        </div>
      </article>
      <div className="favorites-box flex-container">
        {btn}
        <p>Add to Favorites</p>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  favorites: state.favorites
});

const mapDispatchToProps = dispatch => ({
  addFavorite: id => dispatch(addFavorite(id)),
  removeFavorite: id => dispatch(removeFavorite(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsCard);
