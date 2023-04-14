import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: {
    name: "",
    familyName: "",
    age: null,
  },
};

export const user = createSlice({
  name: "userinfo",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = user.actions;

export const selectUser = (state) => state.userinfo.data;

export default user.reducer;

