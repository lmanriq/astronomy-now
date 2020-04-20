import { combineReducers } from 'redux';
import { photoOfTheDay } from './photoOfTheDay';
import { user } from './user';
import { news } from './news';
import { favorites } from './favorites';
import { issPosition } from './issPosition';
import { peopleData } from './peopleData';
import { searchResults } from './searchResults';
import { error } from './error';
import { roverPhotos } from './roverPhotos';


const rootReducer = combineReducers({
  photoOfTheDay,
  user,
  news,
  favorites,
  issPosition,
  peopleData,
  searchResults,
  error,
  roverPhotos
})

export default rootReducer;