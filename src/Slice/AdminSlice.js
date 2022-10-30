import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  selected: "Dashboard",
};
const adminSlice = createSlice({
  name: "AdminSlice",
  initialState,
  reducers: {
    setSelect: (state, action) => {
      state.selected = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const constadminReaducer = adminSlice.reducer;

export const setSelect = adminSlice.actions.setSelect;
