import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const counter = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmmount } = counter.actions;

export default counter.reducer;
