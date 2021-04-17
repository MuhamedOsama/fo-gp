import { combineReducers } from 'redux';
import uploaderReducer from './reducers/uploaderReducer';
import coursesReducer from './reducers/coursesReducers';
import userReducer from './reducers/userReducer';
const rootReducers = combineReducers({
   userState: userReducer,
   uploaderState: uploaderReducer,
   coursesState: coursesReducer,
});

export default rootReducers;
