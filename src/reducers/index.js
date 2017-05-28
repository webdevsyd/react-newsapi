import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import newsReducer from './NewsReducer';

export default combineReducers({
	routing: routerReducer,
	newsReducer: newsReducer
})
