import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadCategories = createAsyncThunk("categories/load", async () => {
  const response = await fetch(process.env.REACT_APP_API + "/categories");
  const json = await response.json();
  
  return json.results;
});

export const loadProducts = createAsyncThunk("products/load", async () => {
  const response = await fetch(process.env.REACT_APP_API + "/products");
  const json = await response.json();

  return json.results;
});

export const updateProduct = createAsyncThunk(
  "products/update",
  async ({ product, stockAmount }) => {

    const updatedProduct = {
      ...product,
      inStock: product.inStock - stockAmount,
    };
    // PUT to the API at products/{id}
    const response = await fetch(
      `${process.env.REACT_APP_API}/products/${product._id}`,
      {
        method: "PUT",
        contentType: "application/json",
        body: JSON.stringify(updatedProduct),
      }
    );

    return response.json();
  }
);

const initialState = {
  categories: [],
  selectedCategory: undefined,
  products: [],
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    showCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCategories.fulfilled, (state, { payload }) => {
        state.categories = payload;
      })
      .addCase(loadProducts.fulfilled, (state, { payload }) => {
        state.products = payload;
      });
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
