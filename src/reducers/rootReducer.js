import { combineReducers } from "redux";
import recipesReducer from "./recipesReducer";
import favoritesReducer from "./favoritesReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  recipes: recipesReducer,
  userDetails: userReducer,
  userFavorites: favoritesReducer,
});

export default rootReducer;
