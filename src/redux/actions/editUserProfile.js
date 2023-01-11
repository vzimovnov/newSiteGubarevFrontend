import { createAction } from 'redux-actions';

import * as actionTypes from '../actionTypes';

export const editUserProfileRequested = createAction(actionTypes.EDIT_USER_PROFILE_REQUESTED);
export const editUserProfileSuccess = createAction(actionTypes.EDIT_USER_PROFILE_SUCCESS);
export const editUserProfileError = createAction(actionTypes.EDIT_USER_PROFILE_ERROR);
