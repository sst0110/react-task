import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
};

const UserSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    updateItem: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteItem: (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload)
    }
  },
});

export default UserSlice.reducer;
export const { addItem, updateItem, deleteItem } = UserSlice.actions;
