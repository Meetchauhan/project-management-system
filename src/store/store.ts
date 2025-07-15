import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@/features/userSlice/userSlice";
import toastSlice from "@/features/toastSlice/toastSlice";
import profileSlice from "@/features/profileSlice/profileSlice";
import projectSlice from "@/features/projectSlice/projectSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    toast: toastSlice,
    profile: profileSlice,
    project: projectSlice,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
