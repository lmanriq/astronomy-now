import { news } from "./news";

describe("news", () => {
  it("should return the initial state", () => {
    const expectedResult = [];
    const result = news(undefined, ["news"]);
    expect(result).toEqual(expectedResult);
  });

  it("when receiving LOAD_NEWS action, it should return the updated array", () => {
    const mockNews = [
      {
        news_id: "2020-14",
        name: "Piercing the Dark Birthplaces of Massive Stars with Webb",
        url:
          "https://webbtelescope.org/contents/news-releases/2020/news-2020-14"
      },
      {
        news_id: "2020-10",
        name: "Quasar Tsunamis Rip Across Galaxies",
        url: "https://hubblesite.org/contents/news-releases/2020/news-2020-10"
      },
      {
        news_id: "2020-04",
        name:
          "Cosmic Magnifying Glasses Yield Independent Measure of Universe's Expansion",
        url: "https://hubblesite.org/contents/news-releases/2020/news-2020-04"
      }
    ];
    const sampleAction = {
      type: "LOAD_NEWS",
      news: mockNews
    };
    const result = news([], sampleAction);
    expect(result).toEqual(mockNews);
  });
});
