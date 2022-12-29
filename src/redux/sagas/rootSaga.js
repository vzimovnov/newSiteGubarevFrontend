import { all } from 'redux-saga/effects';

import newsSaga from './newsSaga';
import authSaga from './authSaga';
import userVerificationSaga from './userVerificationSaga';
import userSaga from './userSaga';
import addNewsSaga from './addNewsSaga';

function* rootSaga() {
  yield all([
    newsSaga(),
    authSaga(),
    userVerificationSaga(),
    userSaga(),
    addNewsSaga(),
  ]);
}

export default rootSaga;
