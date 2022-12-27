import { combineReducers } from 'redux';

import newsReducer from './newsReducer';
import modalReducer from './modalReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  news: newsReducer,
  modal: modalReducer,
  auth: authReducer,
  users: userReducer,
});

export default rootReducer;
