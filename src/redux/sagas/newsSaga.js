import { call, put, takeLatest } from 'redux-saga/effects';

import { getAllNews } from '../../api/news';
import { newsReceived, getNewsFailed } from '../actions/news';
import { NEWS_REQUESTED } from '../actionTypes';

function* newsWorker() {
  try {
    const news = yield call(getAllNews);
    yield put(newsReceived(news));
  } catch (error) {
    yield put(getNewsFailed(error.message));
  }
}

function* newsWatcher() {
  yield takeLatest(NEWS_REQUESTED, newsWorker);
}

export default newsWatcher;
