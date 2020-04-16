import { combineReducers } from 'redux';
import { photoOfTheDay } from './photoOfTheDay';
import { user } from './user';
import { news } from './news';
import { favorites } from './favorites';

const rootReducer = combineReducers({
  photoOfTheDay,
  user,
  news,
  favorites
})

export default rootReducer;