import apiClient from "@/lib/apiClient/apiClient";
import { profileDataType } from "@/types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: profileDataType = {
  loading: false,
  data: null,
  error: null,
};

export const getProfile = createAsyncThunk("getProfile", async () => {
  const response = await apiClient(true).get("/api/user/profile");
  return response.data;
});

const profile = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something is wrong";
      });
  },
});

export default profile.reducer;
