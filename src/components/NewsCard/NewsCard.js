import React from 'react';
import './NewsCard.css'

const NewsCard = (props) => {
  const { title, url, image, description, date} = props;

  return(
    <article className="news-card">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="card-image-container">
          <img src={image} alt={title}/>
        </div>
        <div className="text-container">
          <h1>{title}</h1>
          <p>{date}</p>
          <p>{description}</p>
        </div>
      </a>
    </article>
  )
}

export default NewsCard;