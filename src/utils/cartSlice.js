import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // const newState = [...state];
      // newState.items.push(action.payload);
      // return newState;
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items.length = 0; // []
      // or use
      // return {items: []}
    },
  },
});

// console.log(cartSlice);

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
