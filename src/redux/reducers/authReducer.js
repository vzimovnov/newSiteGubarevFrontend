import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
  LOGOUT,
  VERIFICATION_SUCCESS,
  VERIFICATION_ERROR,
  VERIFICATION_REQUESTED,
} from '../actionTypes';

const initialState = {
  authUser: {},
  isLoggedIn: Boolean(localStorage.getItem('token')),
  isLoading: false,
  error: null,
};
export default function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case VERIFICATION_REQUESTED:
    case AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case VERIFICATION_SUCCESS:
    case AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        authUser: action.payload,
        error: null,
      };
    case VERIFICATION_ERROR:
    case AUTH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isLoggedIn: false,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        authUser: {},
        error: null,
      };
    default: return state;
  }
}
