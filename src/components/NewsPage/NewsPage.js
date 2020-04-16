import React, { Component } from "react";
import { connect } from "react-redux";
import { loadNews } from "../../actions";
import NewsCard from "../NewsCard/NewsCard";
import './NewsPage.css'
import {
  HUBBLE_BASE,
  HUBBLE_NEWS_ENDPOINT,
  HUBBLE_SPECIFIC_STORY_ENDPOINT,
  PROXY_URL
} from "../../utils/constants";

class NewsPage extends Component {
  async componentDidMount() {
    // try {
    //   const newsResponse = await fetch(
    //     PROXY_URL + HUBBLE_BASE + HUBBLE_NEWS_ENDPOINT
    //   );
    //   console.log(newsResponse)
    //   const newsData = await newsResponse.json();
    //   this.props.loadNews(newsData);
    //   const detailsUrls = newsData.map(story => fetch(PROXY_URL + HUBBLE_BASE + HUBBLE_SPECIFIC_STORY_ENDPOINT(story.news_id)));
    //   const responses = await Promise.all(detailsUrls)
    //   const parsedResponses = responses.map(res => res.json());
    //   const allData = await Promise.all(parsedResponses)
    //   this.props.loadNews(allData);
    // } catch (error) {
    //   console.error(error.message);
    // }
  }

  render() {
    // const { news } = this.props;
    const sampleData = {
      name: "Piercing the Dark Birthplaces of Massive Stars with Webb",
      news_id: "2020-14",
      url: "https://webbtelescope.org/contents/news-releases/2020/news-2020-14",
      publication: "2020-04-10T10:00:00.000-04:00",
      mission: "james_webb",
      abstract:
        "While we know that high-mass stars often die as dazzling supernovas, their births are much more mysterious. They form in very dense, cold clouds of gas and dust that can have up to 100,000 times the mass of the Sun. Little is known about these regions, which are so dense that they often appear as big, dark blobs on the sky. Seemingly devoid of stars, the clouds are actually obscuring the light from background stars. These dark patches are so thick with dust that they even block out some wavelengths of infrared light, which can usually penetrate through dusty clouds. For this reason, they are called infrared-dark clouds. However, Webb’s unprecedented sensitivity allows observations of background stars even through these very dense regions. By doing this, astronomers can probe the structure of the clouds, which is essential for understanding the star-formation process.\r\n\r\n",
      thumbnail:
        "//imgsrc.hubblesite.org/hvi/uploads/story/thumbnail/1350/low_STSCI-J-p2014a-t-400x400.png",
      thumbnail_retina:
        "//imgsrc.hubblesite.org/hvi/uploads/story/thumbnail/1350/STSCI-J-p2014a-t-400x400.png",
      thumbnail_1x:
        "//imgsrc.hubblesite.org/hvi/uploads/story/thumbnail/1350/low_STSCI-J-p2014a-t-400x400.png",
      thumbnail_2x:
        "//imgsrc.hubblesite.org/hvi/uploads/story/thumbnail/1350/STSCI-J-p2014a-t-400x400.png",
      keystone_image_1x:
        "//imgsrc.hubblesite.org/hvi/uploads/story/display_image/1350/low_STSCI-J-p2014a-k-1340x520.png",
      keystone_image_2x:
        "//imgsrc.hubblesite.org/hvi/uploads/story/display_image/1350/STSCI-J-p2014a-k-1340x520.png",
      release_images: [4644, 4645]
    };
    const news = [sampleData, sampleData, sampleData, sampleData, sampleData, sampleData, sampleData];
    const newsCards = news.map(story => {
      return (
        <NewsCard
          key={story.news_id}
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
