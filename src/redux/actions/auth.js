import { createAction } from 'redux-actions';

import * as actionTypes from '../actionTypes';

export const authRequest = createAction(actionTypes.AUTH_REQUEST);
export const authSuccess = createAction(actionTypes.AUTH_SUCCESS);
export const authError = createAction(actionTypes.AUTH_ERROR);

export const verificationRequest = createAction(actionTypes.VERIFICATION_REQUESTED);
export const verificationSuccess = createAction(actionTypes.VERIFICATION_SUCCESS);
export const verificationError = createAction(actionTypes.VERIFICATION_ERROR);

export const logout = createAction(actionTypes.LOGOUT);
