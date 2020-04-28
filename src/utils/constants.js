export const NASA_BASE = "https://api.nasa.gov";

export const ROVER_ENDPOINT = date =>
  `/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${process.env.REACT_APP_API_KEY}`;

export const POTD_URL = 
  `/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`;

export const HUBBLE_BASE = "https://hubblesite.org/api/v3";

export const HUBBLE_NEWS_ENDPOINT = "/news";

export const HUBBLE_SPECIFIC_STORY_ENDPOINT = news_id =>
  `/news_release/${news_id}?api_key=${process.env.REACT_APP_API_KEY}`;

export const PROXY_URL = "https://cors-anywhere.herokuapp.com/";

export const ISS_BASE = "http://api.open-notify.org";

export const ISS_NOW_ENDPOINT = "/iss-now.json";

export const ISS_PASSTIMES_ENDPOINT = (lat, lon) =>
  `/iss-pass.json?lat=${lat}&lon=${lon}`;

export const ISS_PEOPLE_ENDPOINT = "/astros.json";
