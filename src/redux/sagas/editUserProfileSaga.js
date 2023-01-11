import { call, put, takeLatest } from 'redux-saga/effects';

import { editUserProfile } from '../../api/users';

import { editUserProfileSuccess, editUserProfileError } from '../actions/editUserProfile';

import { EDIT_USER_PROFILE_REQUESTED } from '../actionTypes';

function* editUserWorker({ payload }) {
  try {
    const { values, picture } = payload;
    const formData = new FormData();
    formData.append('login', values.login);
    formData.append('avatar', picture);
    const response = yield call(editUserProfile, formData);
    yield put(editUserProfileSuccess(response));
  } catch (error) {
    const { response: { data } } = error;
    yield put(editUserProfileError(data));
  }
}
function* editUserProfileWatcher() {
  yield takeLatest(EDIT_USER_PROFILE_REQUESTED, editUserWorker);
}

export default editUserProfileWatcher;
