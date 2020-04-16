import React from "react";
import "./NewsCard.css";

const NewsCard = props => {
  const { title, url, image, description, date, index } = props;

  return (
    <section>
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
    </section>
  );
};

export default NewsCard;
