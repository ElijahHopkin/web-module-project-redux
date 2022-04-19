import { combineReducers } from 'redux';
import favReducer from './favoritesReducer';
import movieReducer from './movieReducer';



export default combineReducers({movieReducer, favReducer});