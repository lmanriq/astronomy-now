import React, { Component } from "react";
import { connect } from "react-redux";
import { loadNews } from "../../actions";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsPage.css";
import PropTypes from 'prop-types';
import { fetchAllNews, fetchNewsDetails } from "../../utils/apiCalls";


class NewsPage extends Component {
  async componentDidMount() {
    try {
      const newsData = await fetchAllNews();
      this.props.loadNews(newsData);
      const allData = await fetchNewsDetails(newsData);
      this.props.loadNews(allData);
    } catch (error) {
      console.error(error.message);
    }
  }

  render() {
    const { news } = this.props;
    const newsCards = news.map(story => {
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

    return (
      <section className="news-page main-page flex-container">
        <h1>News from the Hubble Space Telescope</h1>
        <div className="news-container">{newsCards}</div>
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

NewsPage.propTypes = {
  new: PropTypes.array,
  loadNews: PropTypes.func
}
