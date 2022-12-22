import { call, put, takeLatest } from 'redux-saga/effects';

import checkUser from '../../api/whoAmI';

import {
  verificationSuccess,
  verificationError,
} from '../actions/auth';

import {
  VERIFICATION_REQUESTED,
} from '../actionTypes';

function* verificationWorker() {
  try {
    const user = yield call(checkUser);
    yield put(verificationSuccess(user));
  } catch (error) {
    yield put(verificationError(error.message));
  }
}

function* verificationWatcher() {
  yield takeLatest(VERIFICATION_REQUESTED, verificationWorker);
}

export default verificationWatcher;
