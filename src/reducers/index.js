import { combineReducers } from 'redux';
import { photoOfTheDay } from './photoOfTheDay';
import { user } from './user';
import { news } from './news';

const rootReducer = combineReducers({
  photoOfTheDay,
  user,
  news
})

export default rootReducer;