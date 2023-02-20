import { createSelector } from "reselect";

const selectHomeReducer = (state) => state.home;

export const selectHomeItems = createSelector(
  [selectHomeReducer],
  (home) => home.items
);

export const selectHomeIsLoading = createSelector(
  [selectHomeReducer],
  (home) => home.isLoading
);
