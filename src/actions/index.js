export const loadPhotoOfTheDay = data => ({
  type: 'LOAD_POTD',
  data
})

export const loginUser = user => ({
  type: 'LOGIN_USER',
  user
})

export const logoutUser = user => ({
  type: 'LOGOUT_USER'
})

export const loadNews = news => ({
  type: 'LOAD_NEWS',
  news
})

export const addFavorite = id => ({
  type: 'ADD_FAVORITE',
  id
})

export const removeFavorite = id => ({
  type: 'ADD_FAVORITE',
  id
})