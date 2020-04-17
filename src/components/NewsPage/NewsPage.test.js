import React from "react";
import { render, waitForElement } from "@testing-library/react";
import NewsPage from "./NewsPage";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../reducers";
import { fetchAllNews, fetchNewsDetails } from "../../utils/apiCalls";
jest.mock("../../utils/apiCalls");

describe("News Page", () => {
  it("Should render what we expect", async () => {
    const mockNewsData = [
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
    const mockDetailedData = [
      {
        name: "Piercing the Dark Birthplaces of Massive Stars with Webb",
        news_id: "2020-14",
        url:
          "https://webbtelescope.org/contents/news-releases/2020/news-2020-14",
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
      },
      {
        name: "Quasar Tsunamis Rip Across Galaxies",
        news_id: "2020-10",
        url: "https://hubblesite.org/contents/news-releases/2020/news-2020-10",
        publication: "2020-03-19T13:00:00.000-04:00",
        mission: "hubble",
        abstract:
          "The weather forecast for galaxies hosting monster, active black holes is blustery. Engorged by infalling material, a supermassive black hole heats so much gas that it can shine 1,000 times brighter than its host galaxy. But that’s not all.\r\n\r\nHubble astronomers found that the region around the black hole emits so much radiation that it pushes out material at a few percent the speed of light (a speed fast enough to travel from Earth to the Moon in a few minutes). This material slams into a host galaxy’s lanes of gas and dust, preventing the formation of new stars. The torrential winds are snowplowing the equivalent of hundreds of solar masses of material each year. And, the forecast is that this stormy weather will continue for at least ten million years.\r\n",
        credits:
          '<a href="http://www.nasa.gov">NASA</a>, <a href="http://www.spacetelescope.org">ESA</a>, and N. Arav (Virginia Tech)',
        thumbnail:
          "//imgsrc.hubblesite.org/hvi/uploads/story/thumbnail/1337/low_STScI-H-p2010a-t-400x400.jpg",
        thumbnail_retina:
          "//imgsrc.hubblesite.org/hvi/uploads/story/thumbnail/1337/STScI-H-p2010a-t-400x400.jpg",
        thumbnail_1x:
          "//imgsrc.hubblesite.org/hvi/uploads/story/thumbnail/1337/low_STScI-H-p2010a-t-400x400.jpg",
        thumbnail_2x:
          "//imgsrc.hubblesite.org/hvi/uploads/story/thumbnail/1337/STScI-H-p2010a-t-400x400.jpg",
        keystone_image_1x:
          "//imgsrc.hubblesite.org/hvi/uploads/story/display_image/1337/low_STScI-H-2010a-k-1340x520.png",
        keystone_image_2x:
          "//imgsrc.hubblesite.org/hvi/uploads/story/display_image/1337/STScI-H-2010a-k-1340x520.png",
        release_images: [4638]
      },
      {
        name:
          "Cosmic Magnifying Glasses Yield Independent Measure of Universe's Expansion",
        news_id: "2020-04",
        url: "https://hubblesite.org/contents/news-releases/2020/news-2020-04",
        publication: "2020-01-08T14:55:00.000-05:00",
        mission: "hubble",
        abstract:
          "People use the phrase \"Holy Cow\" to express excitement. Playing with that phrase, researchers from an international collaboration developed an acronym—H0LiCOW—for their project's name that expresses the excitement over their Hubble Space Telescope measurements of the universe's expansion rate.\r\n\r\nKnowing the precise value for how fast the universe expands is important for determining the age, size, and fate of the cosmos. Unraveling this mystery has been one of the greatest challenges in astrophysics in recent years.\r\n\r\nMembers of the H0LiCOW (H0 Lenses in COSMOGRAIL's Wellspring) team used Hubble and a technique that is completely independent of any previous method to measure the universe's expansion, a value called the Hubble constant.\r\n\r\nThis latest value represents the most precise measurement yet using the gravitational lensing method, where the gravity of a foreground galaxy acts like a giant magnifying lens, amplifying and distorting light from background objects. This latest study did not rely on the traditional \"cosmic distance ladder\" technique to measure accurate distances to galaxies by using various types of stars as \"milepost markers.\" Instead, the researchers employed the exotic physics of gravitational lensing to calculate the universe's expansion rate.\r\n\r\nThe researchers' result further strengthens a troubling discrepancy between the expansion rate calculated from measurements of the local universe and the rate as predicted from background radiation in the early universe, a time before galaxies and stars even existed. The new study adds evidence to the idea that new theories may be needed to explain what scientists are finding.",
        credits:
          '<a href="http://www.nasa.gov">NASA</a>, <a href="http://www.spacetelescope.org">ESA</a>, S.H. Suyu (Max Planck Institute for Astrophysics, Technical University of Munich, and Academia Sinica Institute of Astronomy and Astrophysics), and K.C. Wong (University of Tokyo\'s Kavli Institute for the Physics and Mathematics of the Universe)',
        thumbnail:
          "//imgsrc.hubblesite.org/hvi/uploads/story/thumbnail/1328/low_STSCI-H-p2004a-t-400x400.png",
        thumbnail_retina:
          "//imgsrc.hubblesite.org/hvi/uploads/story/thumbnail/1328/STSCI-H-p2004a-t-400x400.png",
        thumbnail_1x:
          "//imgsrc.hubblesite.org/hvi/uploads/story/thumbnail/1328/low_STSCI-H-p2004a-t-400x400.png",
        thumbnail_2x:
          "//imgsrc.hubblesite.org/hvi/uploads/story/thumbnail/1328/STSCI-H-p2004a-t-400x400.png",
        keystone_image_1x:
          "//imgsrc.hubblesite.org/hvi/uploads/story/display_image/1328/low_STSCI-H-p2004a-k-1340x520.png",
        keystone_image_2x:
          "//imgsrc.hubblesite.org/hvi/uploads/story/display_image/1328/STSCI-H-p2004a-k-1340x520.png",
        release_images: [4606, 4600, 4607]
      }
    ];
    fetchAllNews.mockResolvedValueOnce(mockNewsData)
    fetchNewsDetails.mockResolvedValueOnce(mockDetailedData)
    const store = createStore(rootReducer);
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <NewsPage />
        </Router>
      </Provider>
    );
    const card1 = await waitForElement(() => getByText("Piercing the Dark Birthplaces of Massive Stars with Webb"))
    const card2 = await waitForElement(() => getByText("Quasar Tsunamis Rip Across Galaxies"))
    const card3 = await waitForElement(() => getByText("Cosmic Magnifying Glasses Yield Independent Measure of Universe's Expansion"))
    expect(card1).toBeInTheDocument();
    expect(card2).toBeInTheDocument();
    expect(card3).toBeInTheDocument();
  });
});
