import { createSlice } from "@reduxjs/toolkit";
import { loginAction } from "./actions/loginAction";
import { logoutAction } from "./actions/logoutAction";
import { updateUserNameAction } from "./actions/updateUserNameAction";

const initialState = sessionStorage.getItem("token")
  ? {
      value: {
        email: sessionStorage.getItem("email"),
        firstName: sessionStorage.getItem("firstName"),
        lastName: sessionStorage.getItem("lastName"),
        userName: sessionStorage.getItem("userName"),
        token: sessionStorage.getItem("token"),
      },
    }
  : {
      value: "",
    };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: loginAction,
    logout: logoutAction,
    updateUserName: updateUserNameAction,
  },
});

export const { login, logout, updateUserName } = userSlice.actions;

export default userSlice.reducer;
