
import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer'
import directorReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const rootPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
  }

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directorReducer,
    shop: shopReducer
})

export default persistReducer(rootPersistConfig, rootReducer)