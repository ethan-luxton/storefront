import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        item: [],
    },
    reducers: {
        viewItem: (state, action) => {
            state.item.push(action.payload);
        },
        getProduct: (state) => {
            return state.item[0];
        },
        clickOffEvent: (state, action) => {
            state.item.pop(action.payload);
        }
    },
})


export const { getProduct, viewItem, clickOffEvent } = productSlice.actions;
export default productSlice.reducer;