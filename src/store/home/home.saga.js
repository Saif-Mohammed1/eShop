import {
  creatingHomeDocForm,
  getHomeItemsAndDocuments,
} from "../../utils/firebase/firebase.utils";
import { takeLatest, call, all, put } from "redux-saga/effects";
import {
  homeFetchFailed,
  homeFetchSuccess,
  homeItemsFailed,
  homeItemsStart,
  homeItemsSuccess,
} from "./home.action";
import { HOME_ACTION_TYPES } from "./home.types";

function* setHomeItems() {
  try {
    const homeItems = yield call(getHomeItemsAndDocuments);
    yield put(homeItemsSuccess(homeItems));
  } catch (error) {
    yield put(homeItemsFailed(error));
  }
}

function* onSetHomeItemsStart() {
  yield takeLatest(HOME_ACTION_TYPES.HOME_SET_ITEMS_START, setHomeItems);
}

function* onFetchHomeStart({ payload }) {
  const items = { ...payload };
  try {
    yield call(creatingHomeDocForm, items);
    yield put(homeFetchSuccess(items));
    yield put(homeItemsStart());
  } catch (error) {
    yield put(homeFetchFailed(error));
  }
}
function* onFetchHomeItems() {
  yield takeLatest(HOME_ACTION_TYPES.HOME_FETCH_ITEMS_START, onFetchHomeStart);
}

export function* homeSaga() {
  yield all([call(onFetchHomeItems), call(onSetHomeItemsStart)]);
}
