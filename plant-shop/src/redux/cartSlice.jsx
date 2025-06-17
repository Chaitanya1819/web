// redux/CartSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const item = action.payload;
      const existing = state.items.find(i => i.id === item.id);
      if (!existing) {
        state.items.push({ ...item, quantity: 1 });
        state.totalQuantity += 1;
      }
    },
    removeItem(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.items = state.items.filter(i => i.id !== action.payload);
      }
    },
    updateQuantity(state, action) {
      const { id, type } = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item) {
        if (type === 'inc') {
          item.quantity += 1;
          state.totalQuantity += 1;
        } else if (type === 'dec') {
          if (item.quantity > 1) {
            item.quantity -= 1;
            state.totalQuantity -= 1;
          } else {
            state.totalQuantity -= 1;
            state.items = state.items.filter(i => i.id !== id);
          }
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
