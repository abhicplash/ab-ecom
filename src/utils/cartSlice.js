import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
  name: "ttb",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index < 0) {
        state.items.push({ ...action.payload, quantity: 1 }); // Add quantity
      } else {
        state.items[index].quantity += 1;
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload.id
      );
    },

    decreaseQuantity: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        if (state.items[index].quantity > 1) {
          state.items[index].quantity -= 1;
        } else {
          state.items.splice(index, 1);
        }
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, decreaseQuantity, clearCart } =
  cartslice.actions;
export default cartslice.reducer;
