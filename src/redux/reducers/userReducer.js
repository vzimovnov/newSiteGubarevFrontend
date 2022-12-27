import {
  USER_REQUESTED,
  USER_RECEIVED,
  USER_ERROR,
} from '../actionTypes';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

export default function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case USER_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case USER_RECEIVED:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        error: null,
      };
    case USER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default: return state;
  }
}
