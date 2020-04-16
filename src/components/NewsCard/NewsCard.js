import React from 'react';

const NewsCard = (props) => {
  const { title, url, image, description} = props;

  return(
    <article>
      <a href={url}>
        <h1>{title}</h1>
        <img src={image} alt={title}/>
        <p>{description}</p>
      </a>
    </article>
  )
}

export default NewsCard;