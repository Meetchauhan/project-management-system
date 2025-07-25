"use client"

import { Provider } from "react-redux";
import store from "../store/store";

interface storeProvider {
  children: React.ReactNode;
}

const StoreProvider = ({ children }: storeProvider) => {
  return <Provider store={store}>{children}</Provider>;
};
export default StoreProvider;
