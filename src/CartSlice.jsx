import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      if (state[action.payload.name]) {
        state[action.payload.name].quantity++;
      } else {
        state[action.payload.name] = {
          name: action.payload.name,
          cost: action.payload.cost,
          quantity: 1,
        };
      }
    },
    removeItem: (state, action) => {},
    updateQuantity: (state, action) => {},
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
