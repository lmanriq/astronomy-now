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