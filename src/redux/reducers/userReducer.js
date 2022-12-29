import {
  USER_REQUESTED,
  USER_RECEIVED,
  USER_ERROR,
  ADD_NEWS_REQUESTED,
  ADD_NEWS_SUCCESS,
  ADD_NEWS_ERROR,
} from '../actionTypes';

const initialState = {
  userNews: [],
  user: null,
  isLoading: false,
  error: null,
};

export default function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_NEWS_REQUESTED:
    case USER_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case ADD_NEWS_SUCCESS:
      return {
        ...state,
        userNews: [...state.userNews, action.payload],
        isLoading: false,
        error: null,
      };
    case USER_RECEIVED:
      return {
        ...state,
        user: action.payload,
        userNews: action.payload.news,
        isLoading: false,
        error: null,
      };
    case ADD_NEWS_ERROR:
    case USER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default: return state;
  }
}
