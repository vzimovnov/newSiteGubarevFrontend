import { createAction } from 'redux-actions';

import * as actionTypes from '../actionTypes';

export const getNewsRequest = createAction(actionTypes.NEWS_REQUESTED);
export const newsReceived = createAction(actionTypes.NEWS_RECEIVED);
export const getNewsError = createAction(actionTypes.NEWS_FAILED);
