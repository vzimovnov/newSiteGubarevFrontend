import { call, put, takeLatest } from 'redux-saga/effects';

import { postNews } from '../../api/news';
import { addNewsSuccess, addNewsError } from '../actions/addNews';
import { ADD_NEWS_REQUESTED } from '../actionTypes';

function* addNewsWorker({ payload }) {
  try {
    const formData = new FormData();
    const { values, picture } = payload;
    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });
    formData.append('picture', picture);
    const news = yield call(postNews, formData);
    yield put(addNewsSuccess(news));
  } catch (error) {
    yield put(addNewsError(error.message));
  }
}
function* addNewsWatcher() {
  yield takeLatest(ADD_NEWS_REQUESTED, addNewsWorker);
}

export default addNewsWatcher;
