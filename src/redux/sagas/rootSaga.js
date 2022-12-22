import { all } from 'redux-saga/effects';

import newsSaga from './newsSaga';
import authSaga from './authSaga';
import userVerificationSaga from './userVerificationSaga';

function* rootSaga() {
  yield all([
    newsSaga(),
    authSaga(),
    userVerificationSaga(),
  ]);
}

export default rootSaga;
