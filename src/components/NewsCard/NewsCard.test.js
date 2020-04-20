import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import NewsCard from "./NewsCard";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../reducers";

describe("News Card", () => {
  it("Should render what we expect", () => {
    const store = createStore(rootReducer);
    const mockStory = {
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
    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <Router>
          <NewsCard
            key={mockStory.id}
            id={mockStory.id}
            title={mockStory.name}
            date={mockStory.publication}
            url={mockStory.url}
            image={mockStory.thumbnail}
            description={mockStory.abstract}
          />
        </Router>
      </Provider>
    );
    expect(getByText("Click to Read More")).toBeInTheDocument();
    expect(
      getByText("Piercing the Dark Birthplaces of Massive Stars with Webb")
    ).toBeInTheDocument();
    expect(getByText("Apr 10, 2020")).toBeInTheDocument();
    expect(
      getByText(
        "While we know that high-mass stars often die as dazzling supernovas, their births are much more mysterious. They form in very dense, cold clouds of gas and dust that can have up to 100,000 times the mass of the Sun. Little is known about these regions, which are so dense that they often appear as big, dark blobs on the sky. Seemingly devoid of stars, the clouds are actually obscuring the light from background stars. These dark patches are so thick with dust that they even block out some wavelengths of infrared light, which can usually penetrate through dusty clouds. For this reason, they are called infrared-dark clouds. However, Webb’s unprecedented sensitivity allows observations of background stars even through these very dense regions. By doing this, astronomers can probe the structure of the clouds, which is essential for understanding the star-formation process."
      )
    ).toBeInTheDocument();
    expect(getByText("Add to Favorites")).toBeInTheDocument();
    expect(getByAltText("empty heart icon")).toBeInTheDocument();
    expect(
      getByAltText("Piercing the Dark Birthplaces of Massive Stars with Webb")
    ).toBeInTheDocument();
  });

  it("should have a full heart icon when the empty heart icon is clicked", async () => {
    const store = createStore(rootReducer);
    const mockStory = {
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
    const { getByAltText } = render(
      <Provider store={store}>
        <Router>
          <NewsCard
            key={mockStory.id}
            id={mockStory.id}
            title={mockStory.name}
            date={mockStory.publication}
            url={mockStory.url}
            image={mockStory.thumbnail}
            description={mockStory.abstract}
          />
        </Router>
      </Provider>
    );
    const emptyIcon = getByAltText("empty heart icon");
    fireEvent.click(emptyIcon);
    const fullHeartIcon = await waitForElement(() =>
      getByAltText("full heart icon")
    );
    expect(fullHeartIcon).toBeInTheDocument();
  });

  it("should go back to an empty icon when clicked twice", async () => {
    const store = createStore(rootReducer);
    const mockStory = {
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
    const { getByAltText } = render(
      <Provider store={store}>
        <Router>
          <NewsCard
            key={mockStory.id}
            id={mockStory.id}
            title={mockStory.name}
            date={mockStory.publication}
            url={mockStory.url}
            image={mockStory.thumbnail}
            description={mockStory.abstract}
          />
        </Router>
      </Provider>
    );
    const emptyIcon = getByAltText("empty heart icon");
    fireEvent.click(emptyIcon);
    const fullHeartIcon = await waitForElement(() =>
      getByAltText("full heart icon")
    );
    expect(fullHeartIcon).toBeInTheDocument();
    fireEvent.click(fullHeartIcon);
    expect(await waitForElement(() => emptyIcon)).toBeInTheDocument();
  });
});
