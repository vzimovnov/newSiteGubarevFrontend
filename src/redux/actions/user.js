import { createAction } from 'redux-actions';

import * as actionTypes from '../actionTypes';

export const getUserRequest = createAction(actionTypes.USER_REQUESTED);
export const getUserReceived = createAction(actionTypes.USER_RECEIVED);
export const getUserFailed = createAction(actionTypes.USER_ERROR);
