import {
  call,
  put,
  takeLatest,
  select,
} from 'redux-saga/effects';

import { authentication, registration } from '../../api/auth';
import { authError, authSuccess } from '../actions/auth';
import { AUTH_REQUEST } from '../actionTypes';
import { putTokenAtLocalStorage } from '../../utils/localStorage';

function* authWorker({ payload }) {
  try {
    const currentPath = yield select((state) => state.modal.modalType);
    const postUser = currentPath === 'login' ? authentication : registration;
    const { token, user } = yield call(postUser, payload);
    yield put(authSuccess(user));
    putTokenAtLocalStorage(token);
  } catch (error) {
    const { response: { data } } = error;
    yield put(authError(data));
  }
}

function* authWatcher() {
  yield takeLatest(AUTH_REQUEST, authWorker);
}

export default authWatcher;
