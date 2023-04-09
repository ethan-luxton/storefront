import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        cartItemNum: 0,
    },
    reducers: {
        addItem: (state, action) => {
            
            state.cartItemNum += 1;
            state.cartItems.push(action.payload);
        },
        deleteItem: (state, action) => {
            
            for (let i = 0; i < state.cartItems.length; i++) {
                if (action.payload === state.cartItems[i]._id) {
                    state.cartItemNum -= 1;
                    state.cartItems.splice(i, 1); 
                    break;
                }
            }
        },
        displayItem: (state, action) => {
            if (action.payload) {
                return state.cartItems;
            }
            
        },
    },
})


export const { addItem, deleteItem, displayItem } = cartSlice.actions;
export default cartSlice.reducer;