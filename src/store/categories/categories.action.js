import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const updateAndAddCategoriesStart = (data) =>
  createAction(
    CATEGORIES_ACTION_TYPES.UPDATE_AND_ADD_CATEGORIES_ITEMS_START,
    data
  );
export const updateAndAddCategoriesSuccess = () =>
  createAction(CATEGORIES_ACTION_TYPES.UPDATE_AND_ADD_CATEGORIES_ITEMS_SUCCESS);

export const updateAndAddCategoriesFailed = (error) =>
  createAction(
    CATEGORIES_ACTION_TYPES.UPDATE_AND_ADD_CATEGORIES_ITEMS_FAILED,
    error
  );
export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );
export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
