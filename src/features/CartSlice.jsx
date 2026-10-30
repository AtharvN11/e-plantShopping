import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: []
};

const CartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {

    addItem: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.cart.find(
        (item) => item.name === newItem.name
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({
          ...newItem,
          quantity: 1
        });
      }
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.name !== action.payload
      );
    },

    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;

      const existingItem = state.cart.find(
        (item) => item.name === name
      );

      if (existingItem && quantity > 0) {
        existingItem.quantity = quantity;
      }
    }

  }
});

export const {
  addItem,
  removeItem,
  updateQuantity
} = CartSlice.actions;

export default CartSlice.reducer;
