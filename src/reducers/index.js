import { combineReducers } from "redux";
import { photoOfTheDay } from "./photoOfTheDay";
import { user } from "./user";
import { news } from "./news";
import { favorites } from "./favorites";
import { issPosition } from "./issPosition";
import { peopleData } from "./peopleData";
import { searchResults } from "./searchResults";
import { error } from "./error";
import { roverPhotos } from "./roverPhotos";
import { isLoading } from "./isLoading";

const rootReducer = combineReducers({
  photoOfTheDay,
  user,
  news,
  favorites,
  issPosition,
  peopleData,
  searchResults,
  error,
  roverPhotos,
  isLoading
});

export default rootReducer;
