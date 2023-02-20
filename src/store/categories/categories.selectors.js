import { createSelector } from "reselect";

const selectCategoriesReducer = (state) => state.categories;

export const selectCategoriesArray = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.categories
);
export const selectCategoriesMap = createSelector(
  [selectCategoriesArray],
  (categories) =>
    categories.reduce((acc, category) => {
      if (category.title && category.items) {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
      }
      return acc;
    }, {})
);
export const selectIsLoading = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.isLoading
);
