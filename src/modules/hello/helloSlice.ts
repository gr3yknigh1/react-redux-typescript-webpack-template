import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface HelloState {
  count: number;
}

const helloInitialState: HelloState = {
  count: 0,
};

const helloSlice = createSlice({
  name: "hello",
  initialState: helloInitialState,
  reducers: {
    increment: (state: HelloState, action: PayloadAction) => {
      state.count = state.count + 1;
    },
    decrement: (state: HelloState, action: PayloadAction) => {
      state.count = state.count - 1;
    },
  },
});

export const helloReducer = helloSlice.reducer;
export const { increment, decrement } = helloSlice.actions;
