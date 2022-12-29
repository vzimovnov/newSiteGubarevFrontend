import { createAction } from 'redux-actions';

import * as actionTypes from '../actionTypes';

export const addNewsRequest = createAction(actionTypes.ADD_NEWS_REQUESTED);
export const addNewsSuccess = createAction(actionTypes.ADD_NEWS_SUCCESS);
export const addNewsError = createAction(actionTypes.ADD_NEWS_ERROR);
