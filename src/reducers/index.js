import { combineReducers } from 'redux';
import { photoOfTheDay } from './photoOfTheDay';
import { user } from './user';
import { news } from './news';
import { favorites } from './favorites';
import { issPosition } from './issPosition';
import { peopleData } from './peopleData';
import { passovers } from './passovers';
import { searchResults } from './searchResults';


const rootReducer = combineReducers({
  photoOfTheDay,
  user,
  news,
  favorites,
  issPosition,
  peopleData,
  passovers,
  searchResults
})

export default rootReducer;