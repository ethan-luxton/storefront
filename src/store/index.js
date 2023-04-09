import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categories';
import cartReducer from './cart';

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    cart: cartReducer,
  },
});

export default store;