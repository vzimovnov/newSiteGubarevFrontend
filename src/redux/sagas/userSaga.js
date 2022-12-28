import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';

import getUser from '../../api/users';
import { getUserFailed, getUserReceived } from '../actions/user';
import { USER_REQUESTED } from '../actionTypes';

function* userWorker({ payload }) {
  try {
    const user = yield call(getUser, payload);
    yield put(getUserReceived(user));
  } catch (error) {
    yield put(getUserFailed(error.message));
  }
}

function* userWatcher() {
  yield takeLatest(USER_REQUESTED, userWorker);
}

export default userWatcher;
