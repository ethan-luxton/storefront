import { createSlice } from "@reduxjs/toolkit";

import CONTENT from "../content";

const initialState = {
  categories: CONTENT.Categories,
  selectedCategory: undefined,
  products: CONTENT.Products,
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    showCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});


export const selectCategoryProducts = (state, selectedCategory) => {
    const { products } = state.categories;
    return selectedCategory
      ? products.filter((product) => product.category === selectedCategory.name)
      : [];
  };


export const { showCategory } = categorySlice.actions;


export default categorySlice.reducer;
