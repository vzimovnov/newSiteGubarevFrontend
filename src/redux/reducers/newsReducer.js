import { NEWS_REQUESTED, NEWS_RECEIVED, NEWS_FAILED } from '../actionTypes';

const initialState = {
  news: [],
  isLoading: false,
  error: null,
};

export default function newsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case NEWS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case NEWS_RECEIVED:
      return {
        ...state,
        isLoading: false,
        news: action.payload,
        error: null,
      };
    case NEWS_FAILED:
      return {
        ...state,
        isLoading: false,
        news: [],
        error: action.payload,
      };
    default: return state;
  }
}
