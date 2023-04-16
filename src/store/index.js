import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categories';
import cartReducer from './cart';
import productReducer from './product'

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    cart: cartReducer,
    product: productReducer,
  },
});

export default store;