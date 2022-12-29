import {
  TOGGLE_MODAL,
  CHANGE_MODAL_TYPE, AUTH_SUCCESS, ADD_NEWS_SUCCESS,
} from '../actionTypes';

const initialState = {
  isOpen: false,
  modalType: '',
};

export default function modalReducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        isOpen: action.payload,
      };
    case CHANGE_MODAL_TYPE:
      return {
        ...state,
        modalType: action.payload,
      };
    case ADD_NEWS_SUCCESS:
    case AUTH_SUCCESS:
      return {
        ...state,
        isOpen: false,
      };
    default: return state;
  }
}
