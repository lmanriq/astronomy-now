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
      this.props.loadNews(newsData);
      const detailsUrls = newsData.map(story => fetch(PROXY_URL + HUBBLE_BASE + HUBBLE_SPECIFIC_STORY_ENDPOINT(story.news_id)));
      const responses = await Promise.all(detailsUrls)
      const parsedResponses = responses.map(res => res.json());
      const allData = await Promise.all(parsedResponses)
      this.props.loadNews(allData);
    } catch (error) {
      console.error(error.message);
    }
  }

  render() {

    return (
      <section className="news-page main-page">
        <h1>News from the Hubble Space Telescope</h1>
        {newsCards}
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
