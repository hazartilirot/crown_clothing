import UserActionTypes from "../user/user.types";
import {all, call, takeLatest, put} from 'redux-saga/effects';

import {clearCart} from './cart.actions'

export function* clearCartOnSighOnSuccess() {
  yield put(clearCart())
}

export function* onSignOnSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSighOnSuccess)
}

export function* cartSagas() {
  yield all([call(onSignOnSuccess)])
}