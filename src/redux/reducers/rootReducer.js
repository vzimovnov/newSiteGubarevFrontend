import { combineReducers } from 'redux';

import newsReducer from './newsReducer';
import modalReducer from './modalReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  news: newsReducer,
  modal: modalReducer,
  auth: authReducer,
});

export default rootReducer;
