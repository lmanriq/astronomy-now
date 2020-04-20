export const loadPhotoOfTheDay = data => ({
  type: "LOAD_POTD",
  data
});

export const loginUser = user => ({
  type: "LOGIN_USER",
  user
});

export const logoutUser = user => ({
  type: "LOGOUT_USER"
});

export const loadNews = news => ({
  type: "LOAD_NEWS",
  news
});

export const addFavorite = id => ({
  type: "ADD_FAVORITE",
  id
});

export const removeFavorite = id => ({
  type: "REMOVE_FAVORITE",
  id
});

export const updateISSPosition = position => ({
  type: "UPDATE_ISS_POSITION",
  position
});

export const loadPeople = peopleData => ({
  type: "LOAD_PEOPLE",
  peopleData
});

export const loadSearchResults = results => ({
  type: "LOAD_RESULTS",
  results
});

export const showError = error => ({
  type: "SHOW_ERROR",
  error
});

export const removeError = () => ({
  type: "REMOVE_ERROR"
});

export const loadRoverPhotos = photos => ({
  type: "LOAD_ROVER_PHOTOS",
  photos
});
