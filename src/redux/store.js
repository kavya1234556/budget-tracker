import { configureStore } from "@reduxjs/toolkit";
import Auth from "./reducer/Auth";
export const store = configureStore({
  reducer: {
    auth: Auth,
  },
});
