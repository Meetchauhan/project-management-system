import apiClient from "@/lib/apiClient/apiClient";
import { userSliceStateType, userRegisterParams, userLoginParams } from "@/types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: userSliceStateType = {
  loading: false,
  data: null,
  error: null,
};

export const userRegister = createAsyncThunk(
  "userRegister",
  async ({ firstName, lastName, email, password }: userRegisterParams) => {
    const response = await apiClient(false).post("/api/user/register", {
      firstName,
      lastName,
      email,
      password,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  }
);

export const userLogin = createAsyncThunk(
  "userLogin",
  async ({ email, password }: userLoginParams) => {
    const response = await apiClient(false).post(
      "/api/user/login",
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  }
);

export const userLogout = createAsyncThunk("userLogout", async () => {
  const response = await apiClient(false).post("/api/user/logout", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userRegister.pending, (state) => {
        state.loading = true;
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something is wrong";
      })

      .addCase(userLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something is wrong";
      })
      .addCase(userLogout.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogout.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(userLogout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something is wrong";
      });
  },
});

export default userSlice.reducer;
