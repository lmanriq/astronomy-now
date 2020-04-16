import React, { Component } from 'react';
import { HUBBLE_BASE, HUBBLE_ALL_NEWS_ENDPOINT, HUBBLE_SPECIFIC_STORY_ENDPOINT } from "../../utils/constants";


class NewsPage extends Component {
  async componentDidMount() {
    const newsResponse = await fetch(HUBBLE_BASE + HUBBLE_ALL_NEWS_ENDPOINT);
    const newsData = await newsResponse.json();
    console.log(newsData)
  } 

  render() {
    return(
      <section className="news-page main-page">
        <h1>News from the Hubble Space Telescope</h1>
      </section>
    )
  }
}

export default NewsPage; 