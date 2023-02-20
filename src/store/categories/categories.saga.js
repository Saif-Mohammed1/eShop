import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  updateAndAddCategoriesFailed,
  updateAndAddCategoriesSuccess,
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
  fetchCategoriesStart,
} from "./categories.action";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../../utils/firebase/firebase.utils";
function* onFetchCategoriesStart() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    categoriesFetched
  );
}
function* categoriesFetched() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, "categories");
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}
function* onFetchUpdateAndAddItems() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.UPDATE_AND_ADD_CATEGORIES_ITEMS_START,
    UpdateAndAddItems
  );
}
function* UpdateAndAddItems({ payload }) {
  const data = [...payload];
  try {
    yield call(addCollectionAndDocuments, "categories", data);
    yield put(updateAndAddCategoriesSuccess());
    yield put(fetchCategoriesStart());
  } catch (error) {
    yield put(updateAndAddCategoriesFailed(error));
  }
}

export function* categoriesSaga() {
  yield all([call(onFetchUpdateAndAddItems), call(onFetchCategoriesStart)]);
}
