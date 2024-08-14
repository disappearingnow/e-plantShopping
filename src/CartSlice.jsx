import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existsInCart = state.items.find((item) => item.name === name);
      if (typeof existsInCart === "undefined") {
        state.items.push({
          name,
          image,
          cost,
          quantity: 1,
        });
      } else {
        existsInCart.quantity++;
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemInState = state.items.find((item) => item.name === name);
      if (typeof itemInState !== "undefined") {
        itemInState.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
