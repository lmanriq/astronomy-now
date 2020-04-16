import { combineReducers } from 'redux';
import { photoOfTheDay } from './photoOfTheDay';
import { user } from './user';

const rootReducer = combineReducers({
  photoOfTheDay,
  user
})

export default rootReducer;