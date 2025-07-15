import apiClient from "@/lib/apiClient/apiClient";
import { projectDataType } from "@/types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: projectDataType = {
  loading: false,
  data: null,
  error: null,
};

export const getProduct = createAsyncThunk("getProduct", async () => {
  const response = await apiClient(false).get("/api/project/getProject");
  return response.data;
});

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something is wrong";
      });
  },
});

export default projectSlice.reducer;
