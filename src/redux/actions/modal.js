import { createAction } from 'redux-actions';

import * as actionTypes from '../actionTypes';

export const toggleModal = createAction(actionTypes.TOGGLE_MODAL);
export const changeModalType = createAction(actionTypes.CHANGE_MODAL_TYPE);
