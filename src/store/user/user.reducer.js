import { USER_ACTIONS_TYPE } from "./user.types";

const INITIAL_USER_STATE = {
  currentUser: null,
  error: null,
  admin: false,
};

export const userReducer = (state = INITIAL_USER_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTIONS_TYPE.SIGN_IN_SUCCESS:
      return { ...state, currentUser: payload };

    case USER_ACTIONS_TYPE.ADMIN_EXIST_SUCCESS:
      return { ...state, admin: true };
    case USER_ACTIONS_TYPE.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null, admin: false };
    case USER_ACTIONS_TYPE.SIGN_IN_FAILED:
    case USER_ACTIONS_TYPE.SIGN_UP_FAILED:
    case USER_ACTIONS_TYPE.SIGN_OUT_FAILED:
    case USER_ACTIONS_TYPE.ADMIN_EXIST_FAILED:
      return { ...state, error: payload };
    default:
      return state;
  }
};
