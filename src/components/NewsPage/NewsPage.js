import React, { Component } from "react";
import {
  HUBBLE_BASE,
  HUBBLE_NEWS_ENDPOINT,
  HUBBLE_SPECIFIC_STORY_ENDPOINT,
  PROXY_URL
} from "../../utils/constants";

class NewsPage extends Component {
  async componentDidMount() {
    try {
      const newsResponse = await fetch(PROXY_URL + HUBBLE_BASE + HUBBLE_NEWS_ENDPOINT);
      const newsData = await newsResponse.json();
      console.log(newsData);
    } catch (error) {
      console.error(error.message);
    }
  }

  render() {
    return (
      <section className="news-page main-page">
        <h1>News from the Hubble Space Telescope</h1>
      </section>
    );
  }
}

export default NewsPage;
