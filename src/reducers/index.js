import { combineReducers } from 'redux';
import { photoOfTheDay } from './photoOfTheDay';
import { user } from './user';
import { news } from './news';
import { favorites } from './favorites';
import { issPosition } from './issPosition';

const rootReducer = combineReducers({
  photoOfTheDay,
  user,
  news,
  favorites,
  issPosition
})

export default rootReducer;