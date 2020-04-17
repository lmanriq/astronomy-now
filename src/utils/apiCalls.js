import {
  ISS_BASE,
  ISS_PASSTIMES_ENDPOINT,
  PROXY_URL,
  ISS_NOW_ENDPOINT,
  ISS_PEOPLE_ENDPOINT,
  HUBBLE_BASE,
  HUBBLE_NEWS_ENDPOINT,
  HUBBLE_SPECIFIC_STORY_ENDPOINT,
  POTD_URL
} from "../utils/constants";

export const fetchPasstimes = async (lat, lon) => {
  const passResponse = await fetch(
    PROXY_URL + ISS_BASE + ISS_PASSTIMES_ENDPOINT(lat, lon)
  );
  const passData = await passResponse.json();
  return passData;
};

export const fetchPosition = async () => {
  const nowResponse = await fetch(ISS_BASE + ISS_NOW_ENDPOINT);
  const nowData = await nowResponse.json();
  return nowData;
};

export const fetchPeopleData = async () => {
  const peopleResponse = await fetch(ISS_BASE + ISS_PEOPLE_ENDPOINT);
  const peopleData = await peopleResponse.json();
  return peopleData;
};

export const fetchAllNews = async () => {
  const newsResponse = await fetch(
    PROXY_URL + HUBBLE_BASE + HUBBLE_NEWS_ENDPOINT
  );
  const newsData = await newsResponse.json();
  return newsData;
};

export const fetchNewsDetails = async (newsData) => {
  const detailsUrls = newsData.map(story =>
    fetch(
      PROXY_URL + HUBBLE_BASE + HUBBLE_SPECIFIC_STORY_ENDPOINT(story.news_id)
    )
  );
  const responses = await Promise.all(detailsUrls);
  const parsedResponses = responses.map(res => res.json());
  const allData = await Promise.all(parsedResponses);
  return allData;
};

export const fetchPOTD = async () => {
  const potdResponse = await fetch(POTD_URL);
  const potdData = await potdResponse.json();
  return potdData;
}
