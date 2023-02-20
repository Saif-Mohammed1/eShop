import { createSelector } from "reselect";

const selectUserReducer = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (user) => user.currentUser
);
export const isAdminExist = createSelector(
  [selectUserReducer],
  (user) => user.admin
);
