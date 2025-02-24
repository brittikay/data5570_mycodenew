import { configureStore, createSlice } from "@reduxjs/toolkit";

// Create a slice for the counter
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
  },
});

// ✅ Export the actions so they can be used in Counter.tsx
export const { increment, decrement } = counterSlice.actions;

// ✅ Create and export the store
const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});

export default store;
