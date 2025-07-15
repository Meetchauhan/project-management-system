import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isToast: false,
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showToast: (state) => {
      state.isToast = true;
    },
    closeToast: (state) => {
      state.isToast = false;
    },
  },
});

export const { showToast, closeToast } = toastSlice.actions;
export default toastSlice.reducer;
