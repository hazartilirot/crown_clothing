import {combineReducers} from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";

import {persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import shopReducer from "./shop/shop.reducer";

/*user isn't whitelisted for it is processed by an auth library of Google i.e.
 if a page is reloaded a user would still be authenticated. A cart is the only
 object which is needed to be persisted to localStorage*/

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
})

export default persistReducer(persistConfig, rootReducer)