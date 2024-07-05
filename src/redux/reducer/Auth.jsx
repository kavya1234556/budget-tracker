import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user_id: localStorage.getItem("user_id"),
  username: localStorage.getItem("username"),
};

export const Auth = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.user_id = action.payload;
    },
    setUserName: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { setUserId, setUserName } = Auth.actions;

export default Auth.reducer;
