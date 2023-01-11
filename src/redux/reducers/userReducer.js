import {
  USER_REQUESTED,
  USER_RECEIVED,
  USER_ERROR,
  ADD_NEWS_REQUESTED,
  ADD_NEWS_SUCCESS,
  ADD_NEWS_ERROR,
  EDIT_USER_PROFILE_REQUESTED,
  EDIT_USER_PROFILE_SUCCESS,
  EDIT_USER_PROFILE_ERROR,
} from '../actionTypes';

const initialState = {
  userNews: [],
  user: null,
  isLoading: false,
  error: null,
  editUserProfileError: null,
};

export default function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case EDIT_USER_PROFILE_REQUESTED:
    case ADD_NEWS_REQUESTED:
    case USER_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: null,
        editUserProfileError: null,
      };
    case ADD_NEWS_SUCCESS:
      return {
        ...state,
        userNews: [...state.userNews, action.payload],
        isLoading: false,
        error: null,
      };
    case EDIT_USER_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.payload,
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
    case EDIT_USER_PROFILE_ERROR:
      return {
        ...state,
        isLoading: false,
        editUserProfileError: action.payload,
      };
    case ADD_NEWS_ERROR:
    case USER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        user: null,
        userNews: null,
      };
    default: return state;
  }
}
