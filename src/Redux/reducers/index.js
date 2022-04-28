import { combineReducers } from 'redux';
import userReducer from './user';
import saveFoods from './saveFoods';
import searchDrinks from './searchDrinks';

const rootReducer = combineReducers({
  userReducer,
  saveFoods,
  searchDrinks,
});

export default rootReducer;
