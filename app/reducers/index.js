import { combineReducers } from 'redux';
import * as recipesReducer from './timeLine'

export default combineReducers(Object.assign(
  recipesReducer,
));
