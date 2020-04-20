import React, { Component } from "react";
import { connect } from "react-redux";
import { loadNews, updateLoading } from "../../actions";
import NewsCard from "../NewsCard/NewsCard";
import LoadingPage from "../LoadingPage/LoadingPage";
import "./NewsPage.css";
import PropTypes from "prop-types";
import { fetchAllNews, fetchNewsDetails } from "../../utils/apiCalls";

class NewsPage extends Component {
  async componentDidMount() {
    try {
      this.props.updateLoading(true);
      const newsData = await fetchAllNews();
      this.props.loadNews(newsData);
      const allData = await fetchNewsDetails(newsData);
      this.props.loadNews(allData);
      this.props.updateLoading(false);
    } catch (error) {
      this.props.updateLoading(false);
      console.error(error.message);
    }
  }

  render() {
    const { news, isLoading } = this.props;
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
    if (isLoading) {
      return <LoadingPage />;
    } else {
      return (
        <section className="news-page main-page flex-container">
          <h1>News from the Hubble Space Telescope</h1>
          <div className="news-container">{newsCards}</div>
        </section>
      );
    }
  }
}

const mapStateToProps = state => ({
  news: state.news,
  isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
  loadNews: news => dispatch(loadNews(news)),
  updateLoading: loading => dispatch(updateLoading(loading))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);

NewsPage.propTypes = {
  new: PropTypes.array,
  loadNews: PropTypes.func
};
