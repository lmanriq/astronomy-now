import {
  ISS_BASE,
  ISS_PASSTIMES_ENDPOINT,
  PROXY_URL
} from "../utils/constants";

export const fetchPasstimes = async (lat, lon) => {
  const passResponse = await fetch(
    PROXY_URL + ISS_BASE + ISS_PASSTIMES_ENDPOINT(lat, lon)
  );
  const passData = await passResponse.json();
  return passData;
};
