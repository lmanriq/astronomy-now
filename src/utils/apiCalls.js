import {
  ISS_BASE,
  ISS_PASSTIMES_ENDPOINT,
  PROXY_URL,
  ISS_NOW_ENDPOINT,
  ISS_PEOPLE_ENDPOINT
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
