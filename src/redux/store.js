import {applyMiddleware, createStore} from "redux";
import logger from "redux-logger";
import persistReducer from "./combine-reducer";
import {persistStore} from "redux-persist";
import createSagaMiddleware from 'redux-saga'

import rootSaga from './root-saga'

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") 
  middlewares.push(logger);

export const store = createStore(
  persistReducer,
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);