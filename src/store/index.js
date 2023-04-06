import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categories';

const store = configureStore({
  reducer: {
    categories: categoryReducer,
  },
});

export default store;