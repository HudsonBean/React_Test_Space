import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface counterState {
  value: number;
}

const initialState: counterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, setValue } = counterSlice.actions;

export default counterSlice.reducer;
