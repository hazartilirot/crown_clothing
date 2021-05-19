import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import persistReducer from "./combine-reducer";
import {persistStore} from "redux-persist";

const middlewares = [logger]

export const store = createStore(persistReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store)
