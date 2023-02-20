import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  createAuthUserWithEmailAndPassword,
  creatingUserDocForm,
  getCurrentUser,
  signInWithEmailAndPasswords,
  signInWithGooglePopup,
  signOutUser,
} from "../../utils/firebase/firebase.utils";
import {
  AdminFailed,
  AdminStart,
  AdminSuccess,
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
  signUpSuccess,
} from "./user.action";
import { USER_ACTIONS_TYPE } from "./user.types";
function* getDataFromAuth(userAuth, additionalInfo) {
  try {
    const userData = yield call(creatingUserDocForm, userAuth, additionalInfo);
    yield put(signInSuccess({ id: userData.id, ...userData.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}
function* isUserExist() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getDataFromAuth, userAuth);
    yield put(AdminStart(userAuth));
  } catch (error) {
    yield put(signInFailed(error));
  }
}
function* googlePopupSignIn() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getDataFromAuth, user);
    yield put(AdminStart(user));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

function* EmailAndPasswordSingIn({ payload: { email, password } }) {
  try {
    const { user } = yield call(signInWithEmailAndPasswords, email, password);
    yield call(getDataFromAuth, user);
    yield put(AdminStart(user));
  } catch (error) {
    yield put(signInFailed(error));
  }
}
function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield put(signUpSuccess(user, { displayName }));
    yield put(AdminStart(user));
  } catch (error) {
    yield put(signUpFailed(error));
  }
}
function* signInAfterSuccess({ payload: { user, additionalInfo } }) {
  yield call(getDataFromAuth, user, additionalInfo);
}
function* signOutProsess() {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed(error));
  }
}
function* onFetchSignOutStart() {
  yield takeLatest(USER_ACTIONS_TYPE.SIGN_OUT_START, signOutProsess);
}
function* onFetchSignUpSuccess() {
  yield takeLatest(USER_ACTIONS_TYPE.SIGN_UP_SUCCESS, signInAfterSuccess);
}
function* onFetchSignUpStart() {
  yield takeLatest(USER_ACTIONS_TYPE.SIGN_UP_START, signUp);
}
function* onFetchEmailAndPasswordSignIn() {
  yield takeLatest(
    USER_ACTIONS_TYPE.SIGN_IN_WITH_EMAIL_PASSWORD_START,
    EmailAndPasswordSingIn
  );
}
function* AdminExisting({ payload: { email } }) {
  try {
    if (email === "adss.sad1999@gmail.com" || email === "test.123@gmail.com") {
      yield put(AdminSuccess());
    }
  } catch (error) {
    yield put(AdminFailed(error));
  }
}
function* fetchIsAdminExist() {
  yield takeLatest(USER_ACTIONS_TYPE.ADMIN_EXIST_START, AdminExisting);
}

function* onFetchGoogleSignIn() {
  yield takeLatest(
    USER_ACTIONS_TYPE.SIGN_IN_WITH_GOOGLE_START,
    googlePopupSignIn
  );
}
function* onFetchUserSession() {
  yield takeLatest(USER_ACTIONS_TYPE.CHECK_USER_SESSION, isUserExist);
}

export function* userSaga() {
  yield all([
    call(onFetchUserSession),
    call(onFetchGoogleSignIn),
    call(onFetchEmailAndPasswordSignIn),
    call(onFetchSignUpStart),
    call(onFetchSignUpSuccess),
    call(onFetchSignOutStart),
    call(fetchIsAdminExist),
  ]);
}
