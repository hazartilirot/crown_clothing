import { call, put, takeLatest, all } from "redux-saga/effects";

import ShopActionTypes from "./shop.types";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from "./shop.action";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");

    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (e) {
    yield put(fetchCollectionsFailure(e.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)])
}