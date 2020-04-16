import React, { Component } from "react";
import { connect } from "react-redux";
import { loadNews } from "../../actions";
import {
  HUBBLE_BASE,
  HUBBLE_NEWS_ENDPOINT,
  HUBBLE_SPECIFIC_STORY_ENDPOINT,
  PROXY_URL
} from "../../utils/constants";

class NewsPage extends Component {
  async componentDidMount() {
    try {
      const newsResponse = await fetch(
        PROXY_URL + HUBBLE_BASE + HUBBLE_NEWS_ENDPOINT
      );
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

const mapStateToProps = state => ({
  news: state.news
});

const mapDispatchToProps = dispatch => ({
  loadNews: news => dispatch(loadNews(news))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
